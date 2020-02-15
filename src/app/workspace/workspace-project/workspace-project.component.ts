import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workspace-project",
  templateUrl: "./workspace-project.component.html",
  styleUrls: ["./workspace-project.component.css"]
})
export class WorkspaceProjectComponent implements OnInit {
  projects = [
    {
      project_name: "Locker app",
      description: "A locker app for android smartphones",
      project_manager: "Hamza Mushtaq",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress"
    },
    {
      project_name: "Locker app",
      description: "A locker app for android smartphones",
      project_manager: "Hamza Mushtaq",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress"
    },
    {
      project_name: "Locker app",
      description: "A locker app for android smartphones",
      project_manager: "Hamza Mushtaq",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress"
    },
    {
      project_name: "Locker app",
      description: "A locker app for android smartphones",
      project_manager: "Hamza Mushtaq",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress"
    },
    {
      project_name: "Locker app",
      description: "A locker app for android smartphones",
      project_manager: "Hamza Mushtaq",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress"
    },
    {
      project_name: "Locker app",
      description: "A locker app for android smartphones",
      project_manager: "Hamza Mushtaq",
      start_date: "15/02/2020",
      end_date: "20/5/2020",
      status: "In progress"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
