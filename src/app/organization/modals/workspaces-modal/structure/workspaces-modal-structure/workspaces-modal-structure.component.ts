import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-workspaces-modal-structure",
  templateUrl: "./workspaces-modal-structure.component.html",
  styleUrls: ["./workspaces-modal-structure.component.css"],
})
export class WorkspacesModalStructureComponent implements OnInit {
  orgWorkspaces;
  user;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.orgWorkspaces = JSON.parse(localStorage.getItem("org-workspaces"));
    this.user = JSON.parse(localStorage.getItem("user"));

    this.orgWorkspaces.forEach((workspace) => {
      this.connectionService.WorkspaceMembersData(workspace.w_id).subscribe(
        (workspaceMembersData: any) => {
          workspace["members"] = workspaceMembersData.length;
          workspace["joined"] = false;
          workspaceMembersData.forEach((member) => {
            if (member.u_id__id == this.user.id) {
              workspace["joined"] = true;
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
      workspace["teams"] = 0;
      workspace["projects"] = 0;
      this.connectionService.getProjectByWID(workspace.w_id).subscribe(
        (getProjectResult: any) => {
          workspace["projects"] = getProjectResult.length;
          getProjectResult.forEach((project) => {
            this.connectionService.getTeamByPID(project.p_id).subscribe(
              (getTeamByPIDResult: any) => {
                workspace["teams"] += getTeamByPIDResult.length;
              },
              (error) => {
                console.log(error);
              }
            );
          });
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  navigateToWorkspace(w_id) {
    var workspaceModal: any = $("#workspacesModal");
    workspaceModal.modal("hide");
    this.router.navigate(["/workspace", w_id]);
  }
}
