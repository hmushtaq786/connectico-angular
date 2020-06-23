import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-project-team",
  templateUrl: "./project-team.component.html",
  styleUrls: ["./project-team.component.css"],
})
export class ProjectTeamComponent implements OnInit {
  @Input() currentProject;

  teams: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.connectionService
      .getTeamByPID(this.currentProject.p_id__p_id)
      .subscribe(
        (getTeamResult: any) => {
          this.teams = getTeamResult;
          console.log(getTeamResult);
          let orgUsers = JSON.parse(localStorage.getItem("org-members"));
          for (var team of this.teams) {
            InnerLoop: for (var user of orgUsers) {
              if (team.team_lead_id == user.id) {
                team["team_lead"] = user.first_name + " " + user.last_name;
                break InnerLoop;
              }
            }
          }
          this.teams.forEach((team) => {
            this.connectionService.getTaskByTID(team.tm_id).subscribe(
              (getTaskByTIDResult: any) => {
                team["totalTasks"] = getTaskByTIDResult.length;
              },
              (error) => {
                console.log(error);
                team["totalTasks"] = 0;
              }
            );
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
