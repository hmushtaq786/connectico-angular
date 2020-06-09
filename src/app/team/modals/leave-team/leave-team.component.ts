import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-leave-team",
  templateUrl: "./leave-team.component.html",
  styleUrls: ["./leave-team.component.css"],
})
export class LeaveTeamComponent implements OnInit {
  @Input() currentTeam;

  constructor() {}

  ngOnInit() {}
}
