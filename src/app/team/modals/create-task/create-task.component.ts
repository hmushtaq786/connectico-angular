import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

declare const errorModal: any;

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.css"],
})
export class CreateTaskComponent implements OnInit {
  @Input() currentTeam;
  teamMembers: any;

  taskForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  task = {
    t_name: "",
    t_description: "",
    t_start_date: "",
    t_end_date: "",
    t_status: 0,
    team_id: "",
    created_by: "",
    assigned_to: 0,
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {
    $(document).ready(function () {
      var comp: any = $(".mdb-select");
      comp.materialSelect();
    });

    this.connectionService
      .getTotalTeams("t" + this.currentTeam.t_id__tm_id)
      .subscribe(
        (getTotalTeamsResult: any) => {
          this.teamMembers = getTotalTeamsResult;
          console.log(this.teamMembers);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createTask() {
    $("#taskCreateBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));
    var org = JSON.parse(localStorage.getItem("org"));

    this.task.t_name = this.taskForm.get("name").value;
    this.task.t_description = this.taskForm.get("description").value;
    this.task.t_start_date = this.taskForm.get("startDate").value;
    this.task.t_end_date = this.taskForm.get("endDate").value;
    this.task.team_id = this.currentTeam.t_id__tm_id;
    this.task.created_by = user.id;
    this.task.assigned_to = +$("#selectAssignee")
      .children("option:selected")
      .val();

    // console.log(this.project);

    this.connectionService.createTask(this.task).subscribe(
      (createTaskResult: any) => {
        console.log(createTaskResult);
        this.data.changeErrorModalMessage("New task created successfully.");
        var createModal: any = $("#createTask");
        $("#taskCreateBtn").html("Create").removeClass("disabled");
        createModal.modal("hide");
        errorModal();
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
