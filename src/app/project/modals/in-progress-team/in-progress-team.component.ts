import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-in-progress-team",
  templateUrl: "./in-progress-team.component.html",
  styleUrls: ["./in-progress-team.component.css"],
})
export class InProgressTeamComponent implements OnInit {
  @Input() currentTeam;
  constructor(private dataService: DataService, private router: Router) {}
  team_lead = {
    id: 0,
    photo_address: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  ngOnInit() {
    this.dataService.currentinProgressTeam.subscribe((data) => {
      this.currentTeam = data;

      let orgUsers = JSON.parse(localStorage.getItem("org-members"));
      for (var user of orgUsers) {
        if (this.currentTeam.team_lead_id == user.id) {
          this.team_lead = user;
        }
      }
      console.log(this.team_lead);
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
    var membersModal: any = $("#inProgressTeam");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }
}
