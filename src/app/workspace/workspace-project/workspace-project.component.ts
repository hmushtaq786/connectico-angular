import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "../../connection.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-workspace-project",
  templateUrl: "./workspace-project.component.html",
  styleUrls: ["./workspace-project.component.css"],
})
export class WorkspaceProjectComponent implements OnInit {
  currentWorkspace;

  projects: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.dataService.currentWorkspace.subscribe(
      (data) => (this.currentWorkspace = data)
    );

    this.connectionService
      .getProjectByWID(this.currentWorkspace.w_id)
      .subscribe(
        (getProjectResult: any) => {
          this.projects = getProjectResult;
          let orgUsers = JSON.parse(localStorage.getItem("org-members"));
          for (var project of this.projects) {
            InnerLoop: for (var user of orgUsers) {
              if (project.p_manager_id == user.id) {
                project["manager_name"] =
                  user.first_name + " " + user.last_name;
                break InnerLoop;
              }
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
