import { Component, OnInit, Input } from "@angular/core";

declare const counter: any;

declare const createProject: any;
declare const createWorkspaceEvent: any;
declare const addWorkspaceMembers: any;
declare const leaveProject: any;
declare const totalWorkspaceMembers: any;
declare const projectsCompleted: any;
declare const projectsRemaining: any;
declare const totalTeams: any;

@Component({
  selector: "app-project-home",
  templateUrl: "./project-home.component.html",
  styleUrls: ["./project-home.component.css"],
})
export class ProjectHomeComponent implements OnInit {
  @Input() currentProject;
  modalMessage = "<System message>";

  constructor() {}

  ngOnInit() {
    counter();
  }

  createWorkspaceProject() {
    createProject();
  }
  createEvent() {
    createWorkspaceEvent();
  }
  addMembers() {
    addWorkspaceMembers();
  }
  leaveProject() {
    leaveProject();
  }
  viewMembers() {
    totalWorkspaceMembers();
  }
  projectsDone() {
    projectsCompleted();
  }
  projectsLeft() {
    projectsRemaining();
  }
  viewTeams() {
    totalTeams();
  }
}
