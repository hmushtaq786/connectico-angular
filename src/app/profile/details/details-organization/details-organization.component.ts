import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-details-organization",
  templateUrl: "./details-organization.component.html",
  styleUrls: ["./details-organization.component.css"],
})
export class DetailsOrganizationComponent implements OnInit {
  user: any;
  org: any;
  totalMembers: number;
  totalWorkspaces: number;
  totalProjects: number;
  totalTeams: number;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
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
}
