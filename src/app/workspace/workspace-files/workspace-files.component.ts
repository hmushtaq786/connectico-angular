import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-workspace-files",
  templateUrl: "./workspace-files.component.html",
  styleUrls: ["./workspace-files.component.css"],
})
export class WorkspaceFilesComponent implements OnInit {
  currentWorkspace;

  filesCount = 0;
  workspaceFiles = new Array();
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
      .getWorkspacePostsByWID(this.currentWorkspace.w_id)
      .subscribe(
        (GetWorkspacePostsByWIDResult: any) => {
          GetWorkspacePostsByWIDResult.forEach((element) => {
            if (element.pst_filepath) {
              this.workspaceFiles.push(element);
              this.filesCount++;
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
