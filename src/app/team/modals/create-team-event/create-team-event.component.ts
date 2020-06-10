import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-create-team-event",
  templateUrl: "./create-team-event.component.html",
  styleUrls: ["./create-team-event.component.css"],
})
export class CreateTeamEventComponent implements OnInit {
  @Input() currentTeam;
  modalMessage = "<System (create-event) message>";

  teamEventForm = new FormGroup({
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
    team_id: "",
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}

  createTeamEvent() {
    $("#teamEventCreateBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));

    this.event.e_name = this.teamEventForm.get("name").value;
    this.event.e_description = this.teamEventForm.get("description").value;
    this.event.e_location = this.teamEventForm.get("location").value;
    this.event.e_date = this.teamEventForm.get("date").value;
    this.event.e_time = this.teamEventForm.get("time").value;
    this.event.created_by = user.id;
    this.event.team_id = this.currentTeam.t_id__tm_id;

    this.connectionService.createTeamEvent(this.event).subscribe(
      (CreateTeamEventResult: any) => {
        this.modalMessage = "New event created successfully!";
        var createModal: any = $("#createTeamEvent");
        $("#teamEventCreateBtn").html("Create").removeClass("disabled");
        createModal.modal("hide");
        var error: any = $("#errorModal");
        error.modal("dispose");
        this.data.changeErrorModalMessage("New event created successfully.");
        error.modal("show");

        $("#errorModal").on("hidden.bs.modal", () => {
          this.router
            .navigateByUrl("/loading", { skipLocationChange: true })
            .then(() => {
              this.router.navigate(["team/" + this.currentTeam.t_id__tm_id]);
            });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
