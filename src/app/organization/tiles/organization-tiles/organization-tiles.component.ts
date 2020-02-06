import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}

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
