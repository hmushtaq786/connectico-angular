import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

declare const counter: any;

declare const projectsCompleted: any;
declare const projectsRemaining: any;
declare const totalTeams: any;

@Component({
  selector: "app-project-home",
  templateUrl: "./project-home.component.html",
  styleUrls: ["./project-home.component.css"],
})
export class ProjectHomeComponent implements OnInit {
  currentProject;
  modalMessage = "<System message>";
  user: any;
  teams: any;
  totalProjectMembers = 0;
  totalCompletedTasks = 0;
  totalRemainingTasks = 0;
  totalTeams = 0;

  constructor(
    private connectionService: ConnectionService,
    private cookieService: CookieService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.data.currentProject.subscribe((data) => (this.currentProject = data));

    counter(
      this.totalProjectMembers,
      this.totalCompletedTasks,
      this.totalRemainingTasks,
      this.totalTeams
    );

    this.connectionService
      .ProjectMembersData(this.currentProject.p_id__p_id)
      .subscribe(
        (ProjectMembersData: any) => {
          this.totalProjectMembers = ProjectMembersData.length;
        },
        (error) => {
          console.log(error);
        }
      );

    this.connectionService
      .getTeamByPID(this.currentProject.p_id__p_id)
      .subscribe(
        (getTeamByPID: any) => {
          this.teams = getTeamByPID;
          this.totalTeams = getTeamByPID.length;
          this.teams.forEach((team) => {
            this.connectionService.getTaskByTID(team.tm_id).subscribe(
              (getTaskByTIDResult: any) => {
                team["totalTasks"] = getTaskByTIDResult.length;
                var completed = 0;
                var pending = 0;
                team["pending"] = pending;
                team["completed"] = completed;
                getTaskByTIDResult.forEach((task) => {
                  if (task.completed == true) {
                    completed++;
                    this.totalCompletedTasks++;
                  } else {
                    pending++;
                    this.totalRemainingTasks++;
                  }
                });
                // counter(
                //   this.totalProjectMembers,
                //   this.totalCompletedTasks,
                //   this.totalRemainingTasks,
                //   this.totalTeams
                // );
                team["pending"] = pending;
                team["completed"] = Math.floor(
                  (completed / team.totalTasks) * 100
                );
                counter(
                  this.totalProjectMembers,
                  this.totalCompletedTasks,
                  this.totalRemainingTasks,
                  this.totalTeams
                );
              },
              (error) => {
                console.log(error);
                team["totalTasks"] = 0;
                team["pending"] = 0;
                team["completed"] = 0;
              }
            );
          });
        },
        (error) => {
          console.log(error);
        }
      );

    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.currentProject.p_id__p_manager_id__id != this.user.id) {
      var addMembersModal = $("#addProjectMemberButton");
      addMembersModal.addClass("disabled");

      var teamModal = $("#createProjectTeamButton");
      teamModal.addClass("disabled");
    }

    this.data.currentMessage.subscribe(
      (message) => (this.modalMessage = message)
    );
  }

  openModal(modal_id) {
    var modal_obj: any = $("#" + modal_id);
    modal_obj.modal("show");
  }
  projectsDone() {
    projectsCompleted();
  }
  projectsLeft() {
    projectsRemaining();
  }
  viewTeams() {
    totalTeams();
  }
}
