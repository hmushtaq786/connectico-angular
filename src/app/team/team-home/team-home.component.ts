import { Component, OnInit } from "@angular/core";

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

declare const counter: any;

declare const createtask: any;
declare const createTeamEvent: any;
declare const addTeamMembers: any;
declare const leaveTeam: any;
declare const totalTeamMembers: any;
declare const tasksCompleted: any;
declare const tasksRemaining: any;
declare const totalTeams: any;

@Component({
  selector: "app-team-home",
  templateUrl: "./team-home.component.html",
  styleUrls: ["./team-home.component.css"]
})
export class TeamHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  createteamtask() {
    createtask();
  }
  createEvent() {
    createTeamEvent();
  }
  addMembers() {
    addTeamMembers();
  }
  LeaveTeam() {
    leaveTeam();
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
  viewTeams() {
    totalTeams();
  }
}
