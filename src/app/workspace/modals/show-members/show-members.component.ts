import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-show-members",
  templateUrl: "./show-members.component.html",
  styleUrls: ["./show-members.component.css"],
})
export class ShowMembersComponent implements OnInit {
  @Input() currentWorkspace;

  orgMembers: any;
  workspaceMembers: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.orgMembers = JSON.parse(localStorage.getItem("org-members"));
    // this.workspaceMembers = JSON.parse(
    //   localStorage.getItem("workspace-members")
    // );

    this.connectionService
      .WorkspaceMembersData(this.currentWorkspace.w_id)
      .subscribe(
        (WorkspaceMembersDataResult: any) => {
          this.workspaceMembers = WorkspaceMembersDataResult;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  navigateToMessages() {
    var membersModal: any = $("#totalMembers");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }
}
