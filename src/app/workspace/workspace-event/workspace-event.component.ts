import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-workspace-event",
  templateUrl: "./workspace-event.component.html",
  styleUrls: ["./workspace-event.component.css"],
})
export class WorkspaceEventComponent implements OnInit {
  @Input() currentWorkspace;

  events: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
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
