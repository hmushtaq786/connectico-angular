import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-project-event",
  templateUrl: "./create-project-event.component.html",
  styleUrls: ["./create-project-event.component.css"],
})
export class CreateProjectEventComponent implements OnInit {
  @Input() currentProject;

  modalMessage = "<System (create-event) message>";

  projectEventForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    location: new FormControl(),
    time: new FormControl(),
    date: new FormControl(),
  });

  event = {
    e_name: "",
    e_description: "",
    e_location: "",
    e_date: "",
    e_time: "",
    created_by: "",
    project_id: "",
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}

  createProjectEvent() {
    $("#projectEventCreateBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));

    this.event.e_name = this.projectEventForm.get("name").value;
    this.event.e_description = this.projectEventForm.get("description").value;
    this.event.e_location = this.projectEventForm.get("location").value;
    this.event.e_date = this.projectEventForm.get("date").value;
    this.event.e_time = this.projectEventForm.get("time").value;
    this.event.created_by = user.id;
    this.event.project_id = this.currentProject.p_id__p_id;

    this.connectionService.createProjectEvent(this.event).subscribe(
      (CreateProjectEventResult: any) => {
        this.modalMessage = "New event created successfully!";
        var createModal: any = $("#createProjectEvent");
        $("#projectEventCreateBtn").html("Create").removeClass("disabled");
        createModal.modal("hide");
        var error: any = $("#errorModal");
        error.modal("dispose");
        this.data.changeErrorModalMessage("New event created successfully.");
        error.modal("show");

        $("#errorModal").on("hidden.bs.modal", () => {
          this.router
            .navigateByUrl("/loading", { skipLocationChange: true })
            .then(() => {
              this.router.navigate([
                "project/" + this.currentProject.p_id__p_id,
              ]);
            });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
