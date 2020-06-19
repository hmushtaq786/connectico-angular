import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";

declare const counter: any;

declare const totalTeamMembers: any;
declare const tasksCompleted: any;
declare const tasksRemaining: any;

@Component({
  selector: "app-team-home",
  templateUrl: "./team-home.component.html",
  styleUrls: ["./team-home.component.css"],
})
export class TeamHomeComponent implements OnInit {
  @Input() currentTeam;
  modalMessage = "<System message>";
  user: any;
  constructor(
    private connectionService: ConnectionService,
    private data: DataService
  ) {}

  ngOnInit() {
    counter();

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

  openModal(modal_id) {
    var modal_obj: any = $("#" + modal_id);
    modal_obj.modal("show");
  }

  viewMembers() {
    totalTeamMembers();
  }
  tasksDone() {
    tasksCompleted();
  }
  tasksLeft() {
    tasksRemaining();
  }
}
