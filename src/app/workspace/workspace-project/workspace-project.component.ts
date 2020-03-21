import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "../../connection.service";

@Component({
  selector: "app-workspace-project",
  templateUrl: "./workspace-project.component.html",
  styleUrls: ["./workspace-project.component.css"]
})
export class WorkspaceProjectComponent implements OnInit {
  @Input() currentWorkspace;

  projects: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.connectionService
      .getProjectByWID(this.currentWorkspace.w_id)
      .subscribe(
        (getProjectResult: any) => {
          this.projects = getProjectResult;
        },
        error => {
          console.log(error);
        }
      );
  }
}
