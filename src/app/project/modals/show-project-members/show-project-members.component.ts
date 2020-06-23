import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-show-project-members",
  templateUrl: "./show-project-members.component.html",
  styleUrls: ["./show-project-members.component.css"],
})
export class ShowProjectMembersComponent implements OnInit {
  @Input() currentProject;

  projectMembers: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.connectionService
      .ProjectMembersData(this.currentProject.p_id__p_id)
      .subscribe(
        (ProjectMembersData: any) => {
          this.projectMembers = ProjectMembersData;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  navigateToMessages() {
    var membersModal: any = $("#totalProjectMembers");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }
}
