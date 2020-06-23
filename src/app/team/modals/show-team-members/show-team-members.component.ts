import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-show-team-members",
  templateUrl: "./show-team-members.component.html",
  styleUrls: ["./show-team-members.component.css"],
})
export class ShowTeamMembersComponent implements OnInit {
  @Input() currentTeam;
  teamMembers;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.connectionService
      .getTotalTeams("t" + this.currentTeam.t_id__tm_id)
      .subscribe(
        (getTotalTeamsResult: any) => {
          this.teamMembers = getTotalTeamsResult;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  navigateToMessages() {
    var membersModal: any = $("#totalTeamMembers");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }
}
