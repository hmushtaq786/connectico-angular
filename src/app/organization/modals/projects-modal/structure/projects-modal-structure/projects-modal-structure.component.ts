import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-projects-modal-structure",
  templateUrl: "./projects-modal-structure.component.html",
  styleUrls: ["./projects-modal-structure.component.css"],
})
export class ProjectsModalStructureComponent implements OnInit {
  org: any;
  workspaces: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.org = JSON.parse(localStorage.getItem("org"));
    this.connectionService.getTotalWorkspaces(this.org.id).subscribe(
      (getTotalWorkspacesResult: any) => {
        this.workspaces = getTotalWorkspacesResult;
        this.workspaces.forEach((workspace) => {
          this.connectionService.getProjectByWID(workspace.w_id).subscribe(
            (getProjectByWIDResult: any) => {
              workspace["projects"] = getProjectByWIDResult;
            },
            (error) => {
              console.log(error);
              workspace["projects"] = null;
            }
          );
        });
      },
      (error) => {
        console.log(error);
        this.workspaces = null;
      }
    );
  }
}
