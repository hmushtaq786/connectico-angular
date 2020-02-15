import { Component, OnInit } from "@angular/core";

declare const fileTable: any;

@Component({
  selector: "app-workspace-files",
  templateUrl: "./workspace-files.component.html",
  styleUrls: ["./workspace-files.component.css"]
})
export class WorkspaceFilesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    fileTable();
  }
}
