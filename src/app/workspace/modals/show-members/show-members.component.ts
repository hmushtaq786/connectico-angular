import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-show-members",
  templateUrl: "./show-members.component.html",
  styleUrls: ["./show-members.component.css"],
})
export class ShowMembersComponent implements OnInit {
  @Input() currentWorkspace;

  orgMembers: any;
  workspaceMembers: any;

  constructor(private connectionService: ConnectionService) {}

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
  sendMessage() {}
}
