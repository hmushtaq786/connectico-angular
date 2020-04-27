import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";

declare const fileTable: any;

@Component({
  selector: "app-workspace-files",
  templateUrl: "./workspace-files.component.html",
  styleUrls: ["./workspace-files.component.css"],
})
export class WorkspaceFilesComponent implements OnInit {
  files = [
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "Yearly expenses.docx",
      comment: "for the year 2019",
      author: "Abid Mushtaq",
      ext: ".docx",
      time: "13:11 13/1/2020",
    },
  ];

  @Input() currentWorkspace;

  filesCount = 0;
  workspaceFiles = new Array();
  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    fileTable();
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
