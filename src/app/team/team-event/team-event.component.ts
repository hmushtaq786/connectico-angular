import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-team-event",
  templateUrl: "./team-event.component.html",
  styleUrls: ["./team-event.component.css"],
})
export class TeamEventComponent implements OnInit {
  // @Input() currentTeam;
  teamEvents: any;

  currentTeam: any;

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

    this.connectionService
      .getEventByTID(this.currentTeam.t_id__tm_id)
      .subscribe(
        (getEventResult: any) => {
          this.teamEvents = getEventResult;
          let orgUsers = JSON.parse(localStorage.getItem("org-members"));
          for (var event of this.teamEvents) {
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
