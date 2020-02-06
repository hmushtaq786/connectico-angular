import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teams-modal-structure",
  templateUrl: "./teams-modal-structure.component.html",
  styleUrls: ["./teams-modal-structure.component.css"]
})
export class TeamsModalStructureComponent implements OnInit {
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

  teams = [
    {
      name: "Design team",
      project: this.projects[0]
    },
    {
      name: "Dev team",
      project: this.projects[1]
    },
    {
      name: "Testing team",
      project: this.projects[2]
    },
    {
      name: "Design team",
      project: this.projects[3]
    },
    {
      name: "Backend team",
      project: this.projects[4]
    },
    {
      name: "Management team",
      project: this.projects[5]
    },
    {
      name: "HR team",
      project: this.projects[6]
    },
    {
      name: "Network team",
      project: this.projects[7]
    },
    {
      name: "ML team",
      project: this.projects[8]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
