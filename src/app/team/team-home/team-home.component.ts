import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute } from "@angular/router";

// declare const counter: any;

@Component({
  selector: "app-team-home",
  templateUrl: "./team-home.component.html",
  styleUrls: ["./team-home.component.css"],
})
export class TeamHomeComponent implements OnInit {
  // @Input() currentTeam;
  modalMessage = "<System message>";
  user: any;

  currentTeam;

  totalMembers = 0;
  totalTasks = 0;
  tasksCompleted = 0;
  taskPending = 0;

  constructor(
    private connectionService: ConnectionService,
    private data: DataService,
    private cookieService: CookieService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.dataService.currentTeam.subscribe((data) => (this.currentTeam = data));

    this.connectionService
      .getTotalTeams("t" + this.currentTeam.t_id__tm_id)
      .subscribe(
        (getTotalTeamsResult: any) => {
          this.totalMembers = getTotalTeamsResult.length;
          this.connectionService
            .getTaskByTID(this.currentTeam.t_id__tm_id)
            .subscribe(
              (getTaskByTID: any) => {
                this.totalTasks = getTaskByTID.length;
                getTaskByTID.forEach((task) => {
                  if (task.completed == true) {
                    this.tasksCompleted++;
                  } else {
                    this.taskPending++;
                  }
                  this.counter();
                });
              },
              (error) => {
                console.log(error);
                this.counter();
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );

    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.currentTeam.t_id__team_lead_id__id != this.user.id) {
      var addMembersModal = $("#addTeamMemberButton");
      addMembersModal.addClass("disabled");

      var teamModal = $("#createTeamTaskButton");
      teamModal.addClass("disabled");
    }

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
      end: this.totalMembers,
      duration: 2500,
    });
    ($("#number2") as any).jQuerySimpleCounter({
      end: this.totalTasks,
      duration: 2500,
    });
    ($("#number3") as any).jQuerySimpleCounter({
      end: this.tasksCompleted,
      duration: 2500,
    });
    ($("#number4") as any).jQuerySimpleCounter({
      end: this.taskPending,
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

  openModal(modal_id) {
    var modal_obj: any = $("#" + modal_id);
    modal_obj.modal("show");
  }
}
