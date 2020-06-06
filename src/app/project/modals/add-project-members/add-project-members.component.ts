import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-project-members",
  templateUrl: "./add-project-members.component.html",
  styleUrls: ["./add-project-members.component.css"],
})
export class AddProjectMembersComponent implements OnInit {
  @Input() currentProject;

  workspaceMembers: any;
  projectMembers: any;

  data = {
    u_id: "",
    p_id: "",
    r_id: 2, //by default Workspace User = 2
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.connectionService
      .WorkspaceMembersData(this.currentProject.p_id__workspace_id__w_id)
      .subscribe(
        (workspaceMembersDataResult: any) => {
          this.workspaceMembers = workspaceMembersDataResult;
          // getTotalProjects method gives all projects when user id is provided and gives all users of a project when project id is provided
          this.connectionService
            .getTotalProjects("p" + this.currentProject.p_id__p_id)
            .subscribe(
              (getTotalProjectsResult: any) => {
                this.projectMembers = getTotalProjectsResult;
                for (var wMember of this.workspaceMembers) {
                  wMember["isAdded"] = false;
                  InnerLoop: for (var pMember of this.projectMembers) {
                    if (pMember.u_id__id == wMember.u_id__id) {
                      wMember["isAdded"] = true;
                      break InnerLoop;
                    }
                  }
                }
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addMember(event) {
    this.data.u_id = event.target.value;
    this.data.p_id = this.currentProject.p_id__p_id;

    this.connectionService.addMemberProject(this.data).subscribe(
      (addMemberProjectResult: any) => {
        console.log(addMemberProjectResult);
        this.connectionService
          .WorkspaceMembersData(this.currentProject.p_id__workspace_id__w_id)
          .subscribe(
            (workspaceMembersDataResult: any) => {
              this.workspaceMembers = workspaceMembersDataResult;
              // getTotalProjects method gives all projects when user id is provided and gives all users of a project when project id is provided
              this.connectionService
                .getTotalProjects("p" + this.currentProject.p_id__p_id)
                .subscribe(
                  (getTotalProjectsResult: any) => {
                    this.projectMembers = getTotalProjectsResult;
                    for (var wMember of this.workspaceMembers) {
                      wMember["isAdded"] = false;
                      InnerLoop: for (var pMember of this.projectMembers) {
                        if (pMember.u_id__id == wMember.u_id__id) {
                          wMember["isAdded"] = true;
                          break InnerLoop;
                        }
                      }
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
