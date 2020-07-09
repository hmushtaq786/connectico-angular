import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-completed-team",
  templateUrl: "./completed-team.component.html",
  styleUrls: ["./completed-team.component.css"],
})
export class CompletedTeamComponent implements OnInit {
  @Input() currentTeam;
  teamName;
  team_lead = {
    id: 0,
    photo_address: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  constructor(private router: Router) {}

  ngOnInit() {
    this.teamName = this.currentTeam.tm_name;
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
