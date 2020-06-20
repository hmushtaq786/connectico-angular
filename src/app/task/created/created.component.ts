import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-created",
  templateUrl: "./created.component.html",
  styleUrls: ["./created.component.css"],
})
export class CreatedComponent implements OnInit {
  user: any;
  tasks = [];

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.connectionService.getTaskByCreatedBy(this.user.id).subscribe(
      (getTaskResult: any) => {
        this.tasks = getTaskResult;

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
