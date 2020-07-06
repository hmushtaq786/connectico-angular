import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-workspace-event",
  templateUrl: "./workspace-event.component.html",
  styleUrls: ["./workspace-event.component.css"],
})
export class WorkspaceEventComponent implements OnInit {
  currentWorkspace;

  events: any;

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

    this.dataService.currentWorkspace.subscribe(
      (data) => (this.currentWorkspace = data)
    );

    this.connectionService.getEventByWID(this.currentWorkspace.w_id).subscribe(
      (getEventResult: any) => {
        this.events = getEventResult;
        let orgUsers = JSON.parse(localStorage.getItem("org-members"));
        for (var event of this.events) {
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
