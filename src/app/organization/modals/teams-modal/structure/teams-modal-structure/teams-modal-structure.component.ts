import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-teams-modal-structure",
  templateUrl: "./teams-modal-structure.component.html",
  styleUrls: ["./teams-modal-structure.component.css"],
})
export class TeamsModalStructureComponent implements OnInit {
  org: any;
  workspaces: any;
  workspacess = ["Lahore Office", "Overseas Headquarter", "Digital HQ"];
  projectss = [
    {
      name: "Website development",
      workspace: this.workspacess[0],
    },
    {
      name: "IOS development",
      workspace: this.workspacess[1],
    },
    {
      name: "Digital Upgradation",
      workspace: this.workspacess[2],
    },
    {
      name: "Java development",
      workspace: this.workspacess[0],
    },
    {
      name: "Website development",
      workspace: this.workspacess[0],
    },
    {
      name: "Python development",
      workspace: this.workspacess[1],
    },
    {
      name: "JS development",
      workspace: this.workspacess[2],
    },
    {
      name: "Nodejs development",
      workspace: this.workspacess[1],
    },
    {
      name: "App development",
      workspace: this.workspacess[2],
    },
  ];

  teams = [
    {
      name: "Design team",
      project: this.projectss[0],
    },
    {
      name: "Dev team",
      project: this.projectss[1],
    },
    {
      name: "Testing team",
      project: this.projectss[2],
    },
    {
      name: "Design team",
      project: this.projectss[3],
    },
    {
      name: "Backend team",
      project: this.projectss[4],
    },
    {
      name: "Management team",
      project: this.projectss[5],
    },
    {
      name: "HR team",
      project: this.projectss[6],
    },
    {
      name: "Network team",
      project: this.projectss[7],
    },
    {
      name: "ML team",
      project: this.projectss[8],
    },
  ];

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.org = JSON.parse(localStorage.getItem("org"));
    this.connectionService.getTotalWorkspaces(this.org.id).subscribe(
      (getTotalWorkspacesResult: any) => {
        this.workspaces = getTotalWorkspacesResult;
        this.workspaces.forEach((workspace) => {
          this.connectionService.getProjectByWID(workspace.w_id).subscribe(
            (getProjectByWIDResult: any) => {
              workspace["projects"] = getProjectByWIDResult;
              workspace["projects"].forEach((project) => {
                this.connectionService.getTeamByPID(project.p_id).subscribe(
                  (getTeamByPIDResult: any) => {
                    project["teams"] = getTeamByPIDResult;
                  },
                  (error) => {
                    console.log(error);
                    project["teams"] = null;
                  }
                );
              });
            },
            (error) => {
              console.log(error);
              workspace["projects"] = null;
            }
          );
        });
      },
      (error) => {
        console.log(error);
        this.workspaces = null;
      }
    );
  }
}
