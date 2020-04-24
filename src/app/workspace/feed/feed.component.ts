import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  @Input() currentWorkspace;

  user: any;
  org: any;
  members: any;

  tempUsers: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
    // this.members = JSON.parse(localStorage.getItem("workspace-members"));

    this.connectionService
      .WorkspaceMembersData(this.currentWorkspace.w_id)
      .subscribe(
        (WorkspaceMembersDataResult: any) => {
          this.members = WorkspaceMembersDataResult;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
