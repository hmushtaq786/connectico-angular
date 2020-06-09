import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-team-task",
  templateUrl: "./team-task.component.html",
  styleUrls: ["./team-task.component.css"],
})
export class TeamTaskComponent implements OnInit {
  @Input() currentTeam;
  tasks = [
    {
      task_name: "Locker app",
      description: "A locker app for android smartphones",
      team_lead: "Arzoo Malik",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress",
    },
    {
      task_name: "Locker app",
      description: "A locker app for android smartphones",
      team_lead: "Arzoo Malik",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress",
    },
    {
      task_name: "Locker app",
      description: "A locker app for android smartphones",
      team_lead: "Arzoo Malik",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress",
    },
    {
      task_name: "Locker app",
      description: "A locker app for android smartphones",
      team_lead: "Arzoo Malik",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress",
    },
    {
      task_name: "Locker app",
      description: "A locker app for android smartphones",
      team_lead: "Arzoo Malik",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress",
    },
    {
      task_name: "Locker app",
      description: "A locker app for android smartphones",
      team_lead: "Arzoo Malik",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
