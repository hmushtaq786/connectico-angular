import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-team-files",
  templateUrl: "./team-files.component.html",
  styleUrls: ["./team-files.component.css"],
})
export class TeamFilesComponent implements OnInit {
  @Input() currentTeam;
  filesCount = 0;
  teamFiles = new Array();
  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
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
