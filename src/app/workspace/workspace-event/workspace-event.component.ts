import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workspace-event",
  templateUrl: "./workspace-event.component.html",
  styleUrls: ["./workspace-event.component.css"]
})
export class WorkspaceEventComponent implements OnInit {
  events = [
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Hamza Mushtaq"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Hamza Mushtaq"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Hamza Mushtaq"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Hamza Mushtaq"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Hamza Mushtaq"
    },
    {
      e_name: "Annual Dinner",
      e_description: "For all the workspace members",
      e_location: "Headquarter",
      e_date: "15/02/2020",
      e_time: "20:10 A.M",
      created_by: "Hamza Mushtaq"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
