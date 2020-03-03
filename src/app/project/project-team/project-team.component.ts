import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-team",
  templateUrl: "./project-team.component.html",
  styleUrls: ["./project-team.component.css"]
})
export class ProjectTeamComponent implements OnInit {
  teams = [
    {
      team_name: "HR Team",
      description: "HR for the team",
      team_lead: "Hamza Mushtaq",
      tasks_assigned: "10"
    },
    {
      team_name: "IOS Dev Team",
      description: "IOS development team",
      team_lead: "Arzoo Malik",
      tasks_assigned: "24"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
