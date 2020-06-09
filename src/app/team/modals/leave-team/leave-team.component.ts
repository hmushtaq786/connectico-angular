import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-leave-team",
  templateUrl: "./leave-team.component.html",
  styleUrls: ["./leave-team.component.css"],
})
export class LeaveTeamComponent implements OnInit {
  @Input() currentTeam;

  user: any;

  orgMembers: any;
  workspaceMembers: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  leaveTeam() {
    this.connectionService
      .leaveTeam("u" + this.user.id + "t" + this.currentTeam.t_id__tm_id)
      .subscribe(
        (leaveTeamResult: any) => {
          console.log(leaveTeamResult);
          var leaveTeamModal: any = $("#leaveTeam");
          leaveTeamModal.modal("hide");
          this.router.navigate(["/organization"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
