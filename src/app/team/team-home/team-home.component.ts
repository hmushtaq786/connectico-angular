import { Component, OnInit } from "@angular/core";

declare const counter: any;

declare const createTask: any;
declare const createTeamEvent: any;
declare const addTeamMembers: any;
declare const leaveteam: any;
declare const totalTeamMembers: any;
declare const tasksCompleted: any;
declare const tasksRemaining: any;

@Component({
  selector: "app-team-home",
  templateUrl: "./team-home.component.html",
  styleUrls: ["./team-home.component.css"]
})
export class TeamHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  createteamtask() {
    createTask();
  }
  createEvent() {
    createTeamEvent();
  }
  addMembers() {
    addTeamMembers();
  }
  leaveTeam() {
    leaveteam();
  }
  viewMembers() {
    totalTeamMembers();
  }
  tasksDone() {
    tasksCompleted();
  }
  tasksLeft() {
    tasksRemaining();
  }
}
