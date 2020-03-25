import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-leave-workspace",
  templateUrl: "./leave-workspace.component.html",
  styleUrls: ["./leave-workspace.component.css"]
})
export class LeaveWorkspaceComponent implements OnInit {
  @Input() currentWorkspace;

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

  leaveWorkspace() {
    this.connectionService
      .leaveWorkspace("u" + this.user.id + "w" + this.currentWorkspace.w_id)
      .subscribe(
        (leaveWorkspaceResult: any) => {
          console.log(leaveWorkspaceResult);
        },
        error => {
          console.log(error);
        }
      );
  }
}
