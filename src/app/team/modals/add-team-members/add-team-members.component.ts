import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-team-members",
  templateUrl: "./add-team-members.component.html",
  styleUrls: ["./add-team-members.component.css"],
})
export class AddTeamMembersComponent implements OnInit {
  @Input() currentTeam;
  projectMembers: any;
  teamMembers: any;

  data = {
    u_id: "",
    t_id: "",
    r_id: 2, //by default Workspace User = 2
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.connectionService
      .ProjectMembersData(this.currentTeam.t_id__project_id__p_id)
      .subscribe(
        (ProjectMembersDataResult: any) => {
          this.projectMembers = ProjectMembersDataResult;
          // getTotalTeams method gives all teams when user id is provided and gives all users of a team when team id is provided
          this.connectionService
            .getTotalTeams("t" + this.currentTeam.t_id__tm_id)
            .subscribe(
              (getTotalTeamsResult: any) => {
                this.teamMembers = getTotalTeamsResult;
                for (var pMember of this.projectMembers) {
                  pMember["isAdded"] = false;
                  InnerLoop: for (var tMember of this.teamMembers) {
                    if (tMember.u_id__id == pMember.u_id__id) {
                      pMember["isAdded"] = true;
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
    this.data.t_id = this.currentTeam.t_id__tm_id;

    this.connectionService.addMemberTeam(this.data).subscribe(
      (addMemberTeamResult: any) => {
        console.log(addMemberTeamResult);
        this.connectionService
          .ProjectMembersData(this.currentTeam.t_id__project_id__p_id)
          .subscribe(
            (ProjectMembersDataResult: any) => {
              this.projectMembers = ProjectMembersDataResult;
              // getTotalTeams method gives all teams when user id is provided and gives all users of a team when team id is provided
              this.connectionService
                .getTotalTeams("t" + this.currentTeam.t_id__tm_id)
                .subscribe(
                  (getTotalTeamsResult: any) => {
                    this.teamMembers = getTotalTeamsResult;
                    for (var pMember of this.projectMembers) {
                      pMember["isAdded"] = false;
                      InnerLoop: for (var tMember of this.teamMembers) {
                        if (tMember.u_id__id == pMember.u_id__id) {
                          pMember["isAdded"] = true;
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
