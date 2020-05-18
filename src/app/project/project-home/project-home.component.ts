import { Component, OnInit, Input } from "@angular/core";

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

  constructor() {}

  ngOnInit() {
    counter();
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
