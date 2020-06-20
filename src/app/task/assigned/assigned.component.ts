import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-assigned",
  templateUrl: "./assigned.component.html",
  styleUrls: ["./assigned.component.css"],
})
export class AssignedComponent implements OnInit {
  user: any;
  tasks = [];
  selectedTask: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.connectionService.getTaskByAssignedBy(this.user.id).subscribe(
      (getTaskResult: any) => {
        this.tasks = getTaskResult;
        this.selectedTask = this.tasks[0];
        let teams = JSON.parse(localStorage.getItem("user-teams"));
        for (var task of this.tasks) {
          InnerLoop: for (var team of teams) {
            if (task.team_id == team.t_id__tm_id) {
              task["team"] = team.t_id__tm_name;
              break InnerLoop;
            }
          }
        }
        this.tasks.forEach((element) => {
          if (element.t_status == 0) {
            element.t_status = "Assigned";
          } else if (element.t_status == 1) {
            element.t_status = "Submitted";
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openDetails(task_id) {
    var detailDiv = $("#task" + task_id);
    // detailDiv.css("display", "block");
    // detailDiv.show();
    detailDiv.toggle();
  }

  openModal(modal_id, currentTask) {
    this.selectedTask = currentTask;
    var modal_obj: any = $("#" + modal_id);
    modal_obj.modal("show");
  }
}
