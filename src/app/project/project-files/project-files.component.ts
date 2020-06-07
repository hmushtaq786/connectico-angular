import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

declare const fileTable: any;

@Component({
  selector: "app-project-files",
  templateUrl: "./project-files.component.html",
  styleUrls: ["./project-files.component.css"],
})
export class ProjectFilesComponent implements OnInit {
  @Input() currentProject;

  filesCount = 0;
  projectFiles = new Array();
  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    fileTable();
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
