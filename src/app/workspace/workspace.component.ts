import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workspace",
  templateUrl: "./workspace.component.html",
  styleUrls: ["./workspace.component.css"]
})
export class WorkspaceComponent implements OnInit {
  screen = "workspace_home";
  page = "Home";
  constructor() {}

  ngOnInit() {}

  leftbar_click(event) {
    if (event.target.innerText === "Home") {
      this.screen = "workspace_home";
      this.page = "Home";
    } else if (event.target.innerText === "Feed") {
      this.screen = "feed";
      this.page = "Feed";
    } else if (event.target.innerText === "Projects") {
      this.screen = "workspace_project";
      this.page = "Projects";
    } else if (event.target.innerText === "Events") {
      this.screen = "workspace_event";
      this.page = "Events";
    } else if (event.target.innerText === "Files") {
      this.screen = "workspace_files";
      this.page = "Files";
    }
  }
}
