import { Component, OnInit, Input } from "@angular/core";

declare const fileTable: any;

@Component({
  selector: "app-project-files",
  templateUrl: "./project-files.component.html",
  styleUrls: ["./project-files.component.css"],
})
export class ProjectFilesComponent implements OnInit {
  @Input() currentProject;

  files = [
    {
      file_name: "SDS.docx",
      comment: "Design document",
      author: "Arzoo Malik",
      ext: ".docx",
      time: "12:51 15/2/2020",
    },
    {
      file_name: "SRS report.docx",
      comment: "Requirements specification",
      author: "Hamza Mushtaq",
      ext: ".docx",
      time: "02:51 15/1/2020",
    },
    {
      file_name: "Project report.xlsx",
      comment: "Yearly report for the year 2019",
      author: "Hamza Mushtaq",
      ext: ".xlsx",
      time: "10:51 15/2/2020",
    },
  ];

  constructor() {}

  ngOnInit() {
    fileTable();
  }
}
