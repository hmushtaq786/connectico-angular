import { Component, OnInit } from "@angular/core";

import { ConnectionService } from "../../../connection.service";

declare const membersModal: any;
declare const workspacesModal: any;
declare const projectsModal: any;
declare const teamsModal: any;

@Component({
  selector: "app-organization-tiles",
  templateUrl: "./organization-tiles.component.html",
  styleUrls: ["./organization-tiles.component.css"],
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

    let orgMembers = JSON.parse(localStorage.getItem("org-members"));
    this.totalMembers = orgMembers.length;

    let orgWorspaces = JSON.parse(localStorage.getItem("org-workspaces"));
    if (!orgWorspaces) {
      this.totalWorkspaces = 0;
    } else {
      this.totalWorkspaces = orgWorspaces.length;
    }

    this.connectionService.getTotalProjects("o" + this.org.id).subscribe(
      (getTotalProjectsResult: any) => {
        if (!getTotalProjectsResult) {
          this.totalProjects = 0;
        } else {
          this.totalProjects = getTotalProjectsResult.length;
        }
      },
      (error) => {
        this.totalProjects = 0;
        console.log(error);
      }
    );
    this.connectionService.getTotalTeams("o" + this.org.id).subscribe(
      (getTotalTeamsResult: any) => {
        this.totalTeams = getTotalTeamsResult.length;
      },
      (error) => {
        this.totalTeams = 0;
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
