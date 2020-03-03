import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team-event",
  templateUrl: "./team-event.component.html",
  styleUrls: ["./team-event.component.css"]
})
export class TeamEventComponent implements OnInit {
  events = [
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Arzoo Malik"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Arzoo Malik"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Arzoo Malik"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Arzoo Malik"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Arzoo Malik"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Arzoo Malik"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
