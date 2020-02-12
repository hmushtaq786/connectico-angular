import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workspace",
  templateUrl: "./workspace.component.html",
  styleUrls: ["./workspace.component.css"]
})
export class WorkspaceComponent implements OnInit {
  screen = "workspace_home";

  constructor() {}

  ngOnInit() {}

  leftbar_click(event) {
    if (event.target.innerText === "Home") {
      this.screen = "workspace_home";
    } else if (event.target.innerText === "Feed") {
      this.screen = "feed";
    } else if (event.target.innerText === "Projects") {
      this.screen = "workspace_project";
    }
  }
}
