import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-create-team-event",
  templateUrl: "./create-team-event.component.html",
  styleUrls: ["./create-team-event.component.css"],
})
export class CreateTeamEventComponent implements OnInit {
  @Input() currentTeam;

  constructor() {}

  ngOnInit() {}
}
