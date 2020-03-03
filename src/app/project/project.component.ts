import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  screen = "project_home";
  page = "Home";

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    console.log(tokenCookie);
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }
  }

  leftbar_click(event) {
    if (event.target.innerText === "Home") {
      this.screen = "project_home";
      this.page = "Home";
    } else if (event.target.innerText === "Feed") {
      this.screen = "project_feed";
      this.page = "Feed";
    } else if (event.target.innerText === "Teams") {
      this.screen = "project_team";
      this.page = "Projects";
    } else if (event.target.innerText === "Events") {
      this.screen = "project_event";
      this.page = "Events";
    } else if (event.target.innerText === "Files") {
      this.screen = "project_files";
      this.page = "Files";
    }
  }
}
