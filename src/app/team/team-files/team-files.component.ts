import { Component, OnInit } from "@angular/core";

declare const fileTable: any;

@Component({
  selector: "app-team-files",
  templateUrl: "./team-files.component.html",
  styleUrls: ["./team-files.component.css"]
})
export class TeamFilesComponent implements OnInit {
  files = [
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    },
    {
      file_name: "Yearly report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Arzoo Malik",
      ext: ".xlsx",
      time: "12:51 15/2/2020"
    }
  ];

  constructor() {}

  ngOnInit() {
    fileTable();
  }
}
