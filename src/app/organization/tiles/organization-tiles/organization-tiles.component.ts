import { Component, OnInit } from "@angular/core";

import { ConnectionService } from "../../../connection.service";

declare const membersModal: any;
declare const workspacesModal: any;
declare const projectsModal: any;
declare const teamsModal: any;

@Component({
  selector: "app-organization-tiles",
  templateUrl: "./organization-tiles.component.html",
  styleUrls: ["./organization-tiles.component.css"]
})
export class OrganizationTilesComponent implements OnInit {
  org: any;
  totalMembers: number;
  totalWorkspaces: number;
  totalProjects: number;
  totalTeams: number;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.org = JSON.parse(localStorage.getItem("org"));
    this.connectionService.getTotalMembers(this.org.id).subscribe(
      (getTotalMembersResult: any) => {
        console.log(getTotalMembersResult);
        localStorage.setItem(
          "org-members",
          JSON.stringify(getTotalMembersResult)
        );
        this.totalMembers = getTotalMembersResult.length;
      },
      error => {
        console.log(error);
      }
    );
    this.connectionService.getTotalWorkspaces(this.org.id).subscribe(
      (getTotalWorkspacesResult: any) => {
        if (!getTotalWorkspacesResult) {
          this.totalWorkspaces = 0;
        } else {
          this.totalWorkspaces = getTotalWorkspacesResult.length;
        }
      },
      error => {
        console.log(error);
      }
    );
    this.connectionService.getTotalProjects(this.org.id).subscribe(
      (getTotalProjectsResult: any) => {
        this.totalProjects = getTotalProjectsResult.length;
      },
      error => {
        console.log(error);
      }
    );
    this.connectionService.getTotalTeams(this.org.id).subscribe(
      (getTotalTeamsResult: any) => {
        this.totalTeams = getTotalTeamsResult.length;
      },
      error => {
        console.log(error);
      }
    );
  }

  members = () => {
    membersModal();
  };

  workspaces = () => {
    workspacesModal();
  };

  projects = () => {
    projectsModal();
  };

  teams = () => {
    teamsModal();
  };
}
