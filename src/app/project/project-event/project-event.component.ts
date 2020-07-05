import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-project-event",
  templateUrl: "./project-event.component.html",
  styleUrls: ["./project-event.component.css"],
})
export class ProjectEventComponent implements OnInit {
  currentProject;
  projectEvents: any;

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

    this.dataService.currentProject.subscribe(
      (data) => (this.currentProject = data)
    );

    this.connectionService
      .getEventByPID(this.currentProject.p_id__p_id)
      .subscribe(
        (getEventResult: any) => {
          this.projectEvents = getEventResult;
          let orgUsers = JSON.parse(localStorage.getItem("org-members"));
          for (var event of this.projectEvents) {
            InnerLoop: for (var user of orgUsers) {
              if (event.created_by == user.id) {
                event["created_by"] = user.first_name + " " + user.last_name;
                break InnerLoop;
              }
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
