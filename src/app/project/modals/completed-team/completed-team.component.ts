import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-completed-team",
  templateUrl: "./completed-team.component.html",
  styleUrls: ["./completed-team.component.css"],
})
export class CompletedTeamComponent implements OnInit {
  @Input() currentTeam;
  teamName;
  constructor() {}

  ngOnInit() {
    this.teamName = this.currentTeam.tm_name;
  }
}
