import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-project-event",
  templateUrl: "./project-event.component.html",
  styleUrls: ["./project-event.component.css"],
})
export class ProjectEventComponent implements OnInit {
  @Input() currentProject;
  projectEvents: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
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
