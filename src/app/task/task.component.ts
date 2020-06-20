import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "../connection.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  user: any;
  tasks: any;
  modalMessage: any;

  constructor(
    private connectionService: ConnectionService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(
      (message) => (this.modalMessage = message)
    );

    this.user = JSON.parse(localStorage.getItem("user"));

    this.connectionService.getTaskByAssignedBy(this.user.id).subscribe(
      (getTaskResult: any) => {
        this.tasks = getTaskResult;
        console.log(getTaskResult);
        this.tasks.forEach((task) => {
          task["userTask"] = false;
          if (task.assigned_to == this.user.id) {
            task["userTask"] = true;
          }
        });
        // let orgUsers = JSON.parse(localStorage.getItem("org-members"));
        // for (var task of this.tasks) {
        //   InnerLoop: for (var user of orgUsers) {
        //     if (task.assigned_to == user.id) {
        //       task["assigned_to"] = user.first_name + " " + user.last_name;
        //       break InnerLoop;
        //     }
        //   }
        // }
        this.tasks.forEach((element) => {
          if (element.t_status == 0) {
            element.t_status = "Created";
          } else if (element.t_status == 1) {
            element.t_status = "Assigned";
          } else if (element.t_status == 2) {
            element.t_status = "In progress";
          } else if (element.t_status == 3) {
            element.t_status = "Completed";
          } else if (element.t_status == 4) {
            element.t_status = "Submitted";
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
