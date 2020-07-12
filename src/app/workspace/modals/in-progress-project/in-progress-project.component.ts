import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-in-progress-project",
  templateUrl: "./in-progress-project.component.html",
  styleUrls: ["./in-progress-project.component.css"],
})
export class InProgressProjectComponent implements OnInit {
  @Input() currentProject;

  project_manager = {
    id: 0,
    photo_address: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.currentinProgressProject.subscribe((data) => {
      this.currentProject = data;

      let orgUsers = JSON.parse(localStorage.getItem("org-members"));

      for (var user of orgUsers) {
        if (this.currentProject.p_manager_id == user.id) {
          this.project_manager = user;
        }
      }
    });
  }

  getDate(date) {
    date = new Date(Date.parse(date));

    return date.getDate();
  }
  getMonth(date) {
    date = new Date(Date.parse(date));

    return date.getMonth();
  }
  getYear(date) {
    date = new Date(Date.parse(date));

    return date.getFullYear();
  }

  navigateToMessages() {
    var membersModal: any = $("#inProgressProject");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }
}
