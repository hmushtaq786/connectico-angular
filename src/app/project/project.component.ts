import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute } from "@angular/router";
import { ConnectionService } from "../connection.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  project: any;
  projects;
  screen = "project_home";
  page = "Home";

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.projects = JSON.parse(localStorage.getItem("user-projects"));

    this.activatedRoute.paramMap.subscribe((params) => {
      this.projects.forEach((element) => {
        if (element.p_id__p_id == +params.get("id")) {
          // + is for converting the string to int
          this.project = element;
        }
      });
    });
    console.log(this.project);
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
      this.page = "Teams";
    } else if (event.target.innerText === "Events") {
      this.screen = "project_event";
      this.page = "Events";
    } else if (event.target.innerText === "Files") {
      this.screen = "project_files";
      this.page = "Files";
    }
  }
}
