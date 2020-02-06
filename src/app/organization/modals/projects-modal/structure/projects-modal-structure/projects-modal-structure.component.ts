import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects-modal-structure",
  templateUrl: "./projects-modal-structure.component.html",
  styleUrls: ["./projects-modal-structure.component.css"]
})
export class ProjectsModalStructureComponent implements OnInit {
  workspaces = ["Lahore Office", "Overseas Headquarter", "Digital HQ"];

  projects = [
    {
      name: "Website development",
      workspace: this.workspaces[0]
    },
    {
      name: "IOS development",
      workspace: this.workspaces[1]
    },
    {
      name: "Digital Upgradation",
      workspace: this.workspaces[2]
    },
    {
      name: "Java development",
      workspace: this.workspaces[0]
    },
    {
      name: "Website development",
      workspace: this.workspaces[0]
    },
    {
      name: "Python development",
      workspace: this.workspaces[1]
    },
    {
      name: "JS development",
      workspace: this.workspaces[2]
    },
    {
      name: "Nodejs development",
      workspace: this.workspaces[1]
    },
    {
      name: "App development",
      workspace: this.workspaces[2]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
