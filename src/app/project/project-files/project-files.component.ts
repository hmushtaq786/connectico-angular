import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-project-files",
  templateUrl: "./project-files.component.html",
  styleUrls: ["./project-files.component.css"],
})
export class ProjectFilesComponent implements OnInit {
  currentProject;

  filesCount = 0;
  projectFiles = new Array();
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

    this.dataService.currentProject.subscribe(
      (data) => (this.currentProject = data)
    );

    this.connectionService
      .getProjectPostsByPID(this.currentProject.p_id__p_id)
      .subscribe(
        (GetProjectPostsByPIDResult: any) => {
          GetProjectPostsByPIDResult.forEach((element) => {
            if (element.pst_filepath) {
              this.projectFiles.push(element);
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
