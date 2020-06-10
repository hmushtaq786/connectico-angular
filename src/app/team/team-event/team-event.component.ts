import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-team-event",
  templateUrl: "./team-event.component.html",
  styleUrls: ["./team-event.component.css"],
})
export class TeamEventComponent implements OnInit {
  @Input() currentTeam;
  teamEvents: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
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
