import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-team-files",
  templateUrl: "./team-files.component.html",
  styleUrls: ["./team-files.component.css"],
})
export class TeamFilesComponent implements OnInit {
  // @Input() currentTeam;
  currentTeam;
  filesCount = 0;
  teamFiles = new Array();
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

    this.dataService.currentTeam.subscribe((data) => (this.currentTeam = data));

    this.connectionService
      .getTeamPostsByTID(this.currentTeam.t_id__tm_id)
      .subscribe(
        (GetTeamPostsByTIDResult: any) => {
          GetTeamPostsByTIDResult.forEach((element) => {
            if (element.pst_filepath) {
              this.teamFiles.push(element);
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
