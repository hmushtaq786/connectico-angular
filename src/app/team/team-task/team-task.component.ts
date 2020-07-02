import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-team-task",
  templateUrl: "./team-task.component.html",
  styleUrls: ["./team-task.component.css"],
})
export class TeamTaskComponent implements OnInit {
  // @Input() currentTeam;

  currentTeam;
  tasks: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.dataService.currentTeam.subscribe((data) => (this.currentTeam = data));

    this.connectionService.getTaskByTID(this.currentTeam.t_id__tm_id).subscribe(
      (getTaskResult: any) => {
        this.tasks = getTaskResult;
        console.log(getTaskResult);
        let orgUsers = JSON.parse(localStorage.getItem("org-members"));
        for (var task of this.tasks) {
          InnerLoop: for (var user of orgUsers) {
            if (task.assigned_to == user.id) {
              task["assigned_to"] = user.first_name + " " + user.last_name;
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
}
