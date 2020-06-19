import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";

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
  @Input() currentProject;
  modalMessage = "<System message>";
  user: any;

  constructor(
    private connectionService: ConnectionService,
    private data: DataService
  ) {}

  ngOnInit() {
    counter();

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
