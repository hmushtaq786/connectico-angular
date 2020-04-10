import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "../../connection.service";

@Component({
  selector: "app-workspace-project",
  templateUrl: "./workspace-project.component.html",
  styleUrls: ["./workspace-project.component.css"],
})
export class WorkspaceProjectComponent implements OnInit {
  @Input() currentWorkspace;

  projects: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.connectionService
      .getProjectByWID(this.currentWorkspace.w_id)
      .subscribe(
        (getProjectResult: any) => {
          this.projects = getProjectResult;
          let orgUsers = JSON.parse(localStorage.getItem("org-members"));
          console.log(this.projects);
          console.log(orgUsers);
          for (var project of this.projects) {
            InnerLoop: for (var user of orgUsers) {
              if (project.p_manager_id == user.id) {
                project["manager_name"] =
                  user.first_name + " " + user.last_name;
                break InnerLoop;
              }
            }
          }
          console.log(this.projects);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
