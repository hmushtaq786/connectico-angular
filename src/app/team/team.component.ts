import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  screen = "team_home";
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
      this.screen = "team_home";
      this.page = "Home";
    } else if (event.target.innerText === "Feed") {
      this.screen = "feed";
      this.page = "Feed";
    } else if (event.target.innerText === "Tasks") {
      this.screen = "team_task";
      this.page = "tasks";
    } else if (event.target.innerText === "Events") {
      this.screen = "team_event";
      this.page = "Events";
    } else if (event.target.innerText === "Files") {
      this.screen = "team_files";
      this.page = "Files";
    }
  }
}
