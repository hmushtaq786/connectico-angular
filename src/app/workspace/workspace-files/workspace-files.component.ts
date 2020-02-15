import { Component, OnInit } from "@angular/core";

declare const fileTable: any;

@Component({
  selector: "app-workspace-files",
  templateUrl: "./workspace-files.component.html",
  styleUrls: ["./workspace-files.component.css"]
})
export class WorkspaceFilesComponent implements OnInit {
  files = [
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly expenses.docx",
      comment: "for the year 2019",
      author: "Abid Mushtaq",
      ext: ".docx",
      time: "13:11 13/1/2020"
    }
  ];

  constructor() {}

  ngOnInit() {
    fileTable();
  }
}
