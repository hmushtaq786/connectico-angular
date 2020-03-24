import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-members",
  templateUrl: "./add-members.component.html",
  styleUrls: ["./add-members.component.css"]
})
export class AddMembersComponent implements OnInit {
  @Input() currentWorkspace;

  orgMembers: any;
  workspaceMembers: any;

  data = {
    u_id: "",
    w_id: "",
    r_id: 2 //by default Workspace User = 2
  };

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
      .membersOfWorkspace("w" + this.currentWorkspace.w_id)
      .subscribe(
        (membersOfWorkspaceResult: any) => {
          this.workspaceMembers = membersOfWorkspaceResult;
          for (var orgMember of this.orgMembers) {
            orgMember["isAdded"] = false;
            InnerLoop: for (var wcMember of this.workspaceMembers) {
              console.log(orgMember.id + " and " + wcMember.u_id);
              if (wcMember.u_id == orgMember.id) {
                orgMember["isAdded"] = true;
                break InnerLoop;
              }
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  addMember(event) {
    this.data.u_id = event.target.value;
    this.data.w_id = this.currentWorkspace.w_id;

    this.connectionService.addMemberWorkspace(this.data).subscribe(
      (addMemberWorkspaceResult: any) => {
        console.log(addMemberWorkspaceResult);
        this.connectionService
          .membersOfWorkspace("w" + this.currentWorkspace.w_id)
          .subscribe(
            (membersOfWorkspaceResult: any) => {
              this.workspaceMembers = membersOfWorkspaceResult;
              for (var orgMember of this.orgMembers) {
                orgMember["isAdded"] = false;
                InnerLoop: for (var wcMember of this.workspaceMembers) {
                  console.log(orgMember.id + " and " + wcMember.u_id);
                  if (wcMember.u_id == orgMember.id) {
                    orgMember["isAdded"] = true;
                    break InnerLoop;
                  }
                }
              }
            },
            error => {
              console.log(error);
            }
          );
      },
      error => {
        console.log(error);
      }
    );
  }
}
