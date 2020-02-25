import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
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
