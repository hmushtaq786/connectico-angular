import { Component, OnInit, Input } from "@angular/core";

import { DataService } from "src/app/data.service";
import { ConnectionService } from "src/app/connection.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

// declare const counter: any;

@Component({
  selector: "app-workspace-home",
  templateUrl: "./workspace-home.component.html",
  styleUrls: ["./workspace-home.component.css"],
})
export class WorkspaceHomeComponent implements OnInit {
  @Input() currentWorkspace;

  totalWorkspaceMembers = 0;
  totalWorkspaceProjects = 0;
  completedProjects = 0;
  totalTeams = 0;
  workspaceProjects;

  modalMessage = "<System message>";
  user: any;

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

    this.data.currentWorkspace.subscribe(
      (data) => (this.currentWorkspace = data)
    );

    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.currentWorkspace.w_manager_id != this.user.id) {
      var addMembersModal = $("#addWorkspaceMemberButton");
      addMembersModal.addClass("disabled");

      var workspaceModal = $("#createWorkspaceProjectButton");
      workspaceModal.addClass("disabled");
    }

    this.connectionService
      .WorkspaceMembersData(this.currentWorkspace.w_id)
      .subscribe(
        (WorkspaceMembersDataResult: any) => {
          this.totalWorkspaceMembers = Object.keys(
            WorkspaceMembersDataResult
          ).length;
          this.connectionService
            .getProjectByWID(this.currentWorkspace.w_id)
            .subscribe(
              (getProjectByWID: any) => {
                this.totalWorkspaceProjects = getProjectByWID.length;
                this.workspaceProjects = getProjectByWID;
                this.workspaceProjects.forEach((project) => {
                  project["completedTasks"] = 0;
                  project["completed"] = 0;
                  project["totalTasks"] = 0;
                  if (project.p_completed == true) {
                    this.completedProjects++;
                  }
                  this.connectionService.getTeamByPID(project.p_id).subscribe(
                    (getTeamByPID: any) => {
                      this.totalTeams += getTeamByPID.length;
                      getTeamByPID.forEach((team) => {
                        this.connectionService
                          .getTaskByTID(team.tm_id)
                          .subscribe(
                            (getTaskByTIDResult: any) => {
                              project["totalTasks"] +=
                                getTaskByTIDResult.length;
                              getTaskByTIDResult.forEach((task) => {
                                if (task.completed == true) {
                                  project["completedTasks"]++;
                                }
                              });
                              project["completed"] = Math.floor(
                                (project.completedTasks / project.totalTasks) *
                                  100
                              );
                            },
                            (error) => {
                              console.log(error);
                            }
                          );
                      });
                      this.counter();
                    },
                    (error) => {
                      console.log(error);
                    }
                  );
                });
              },
              (error) => {
                console.log(error);
              }
            );
          // this.counter(this.totalWorkspaceMembers);
        },
        (error) => {
          console.log(error);
        }
      );

    this.data.currentMessage.subscribe(
      (message) => (this.modalMessage = message)
    );
  }

  counter() {
    let fn: any = $.fn;
    fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );

      var thisElement = $(this);

      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };
    ($("#number1") as any).jQuerySimpleCounter({
      end: this.totalWorkspaceMembers,
      duration: 2500,
    });
    ($("#number2") as any).jQuerySimpleCounter({
      end: this.totalWorkspaceProjects,
      duration: 2500,
    });
    ($("#number3") as any).jQuerySimpleCounter({
      end: this.completedProjects,
      duration: 2500,
    });
    ($("#number4") as any).jQuerySimpleCounter({
      end: this.totalTeams,
      duration: 2500,
    });

    /* AUTHOR LINK */
    $(".about-me-img").hover(
      function () {
        $(".authorWindowWrapper")
          .stop()
          .fadeIn("fast")
          .find("p")
          .addClass("trans");
      },
      function () {
        $(".authorWindowWrapper")
          .stop()
          .fadeOut("fast")
          .find("p")
          .removeClass("trans");
      }
    );
  }

  openWorkspaceModal(modal_id) {
    var modal_obj: any = $("#" + modal_id);
    modal_obj.modal("show");
  }
}
