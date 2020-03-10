import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workspaces-modal-structure",
  templateUrl: "./workspaces-modal-structure.component.html",
  styleUrls: ["./workspaces-modal-structure.component.css"]
})
export class WorkspacesModalStructureComponent implements OnInit {
  workspaces = [
    {
      name: "Lahore Headoffice",
      image:
        "http://cdn.home-designing.com/wp-content/uploads/2013/04/square-white-tiled-workspace-with-panelled-glass-wall-and-views.jpg",
      members: 27,
      projects: 12,
      teams: 4
    },
    {
      name: "Karachi Branch",
      image:
        "http://cdn.home-designing.com/wp-content/uploads/2013/04/square-white-tiled-workspace-with-panelled-glass-wall-and-views.jpg",
      members: 42,
      projects: 19,
      teams: 7
    },
    {
      name: "Digital Headquarter",
      image:
        "http://cdn.home-designing.com/wp-content/uploads/2013/04/square-white-tiled-workspace-with-panelled-glass-wall-and-views.jpg",
      members: 78,
      projects: 34,
      teams: 12
    },
    {
      name: "Overseas Main",
      image:
        "http://cdn.home-designing.com/wp-content/uploads/2013/04/square-white-tiled-workspace-with-panelled-glass-wall-and-views.jpg",
      members: 56,
      projects: 20,
      teams: 9
    }
  ];

  orgWorkspaces;

  constructor() {}

  ngOnInit() {
    this.orgWorkspaces = JSON.parse(localStorage.getItem("org-workspaces"));
  }
}
