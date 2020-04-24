import { Component, OnInit, Input } from "@angular/core";

import { DataService } from "src/app/data.service";
import { ConnectionService } from "src/app/connection.service";

// declare const counter: any;

declare const createProject: any;
declare const createWorkspaceEvent: any;
declare const addWorkspaceMembers: any;
declare const leaveWorkspace: any;
declare const totalWorkspaceMembers: any;
declare const projectsCompleted: any;
declare const projectsRemaining: any;
declare const totalTeams: any;

@Component({
  selector: "app-workspace-home",
  templateUrl: "./workspace-home.component.html",
  styleUrls: ["./workspace-home.component.css"],
})
export class WorkspaceHomeComponent implements OnInit {
  @Input() currentWorkspace;

  totalWorkspaceMembers;

  modalMessage = "<System message>";

  constructor(
    private connectionService: ConnectionService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.connectionService
      .WorkspaceMembersData(this.currentWorkspace.w_id)
      .subscribe(
        (WorkspaceMembersDataResult: any) => {
          this.totalWorkspaceMembers = Object.keys(
            WorkspaceMembersDataResult
          ).length;
          this.counter(this.totalWorkspaceMembers);
        },
        (error) => {
          console.log(error);
        }
      );
    // counter();

    this.data.currentMessage.subscribe(
      (message) => (this.modalMessage = message)
    );
  }

  counter(totalMembers) {
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
      end: totalMembers,
      duration: 2500,
    });
    ($("#number2") as any).jQuerySimpleCounter({ end: 55, duration: 2500 });
    ($("#number3") as any).jQuerySimpleCounter({ end: 359, duration: 2500 });
    ($("#number4") as any).jQuerySimpleCounter({ end: 246, duration: 2500 });

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

  createWorkspaceProject() {
    createProject();
  }
  createEvent() {
    createWorkspaceEvent();
  }
  addMembers() {
    addWorkspaceMembers();
  }
  leaveWorkspace() {
    leaveWorkspace();
  }
  viewMembers() {
    totalWorkspaceMembers();
  }
  totalProjects() {
    projectsRemaining();
  }
  completedProjects() {
    projectsCompleted();
  }
  viewTeams() {
    totalTeams();
  }
}
