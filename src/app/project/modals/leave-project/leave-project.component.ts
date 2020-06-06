import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-leave-project",
  templateUrl: "./leave-project.component.html",
  styleUrls: ["./leave-project.component.css"],
})
export class LeaveProjectComponent implements OnInit {
  @Input() currentProject;

  user: any;

  orgMembers: any;
  workspaceMembers: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  leaveProject() {
    this.connectionService
      .leaveProject("u" + this.user.id + "p" + this.currentProject.p_id__p_id)
      .subscribe(
        (leaveProjectResult: any) => {
          console.log(leaveProjectResult);
          var leaveProjectModal: any = $("#leaveProject");
          leaveProjectModal.modal("hide");
          this.router.navigate(["/organization"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
