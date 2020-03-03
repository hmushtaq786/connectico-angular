import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-event",
  templateUrl: "./project-event.component.html",
  styleUrls: ["./project-event.component.css"]
})
export class ProjectEventComponent implements OnInit {
  events = [
    {
      e_name: "Project meeting",
      e_description: "Progress of the project discussed so far",
      e_location: "Lahore",
      e_date: "05/02/2020",
      e_time: "10:10 A.M",
      created_by: "Arzoo Malik"
    },
    {
      e_name: "Gather requirements",
      e_description: "For the completion of SRS",
      e_location: "Lahore",
      e_date: "15/01/2020",
      e_time: "12:10 A.M",
      created_by: "Hamza Mushtaq"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
