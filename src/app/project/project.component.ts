import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  project: any;
  user;
  projects;
  screen = "project_home";
  page = "Home";

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.projects = JSON.parse(localStorage.getItem("user-projects"));
    this.user = JSON.parse(localStorage.getItem("user"));

    this.activatedRoute.paramMap.subscribe((params) => {
      this.projects.forEach((element) => {
        if (element.p_id__p_id == +params.get("id")) {
          // + is for converting the string to int
          this.project = element;
          this.dataService.changeCurrentProject(this.project);

          if (this.project.p_id__p_completed == true) {
            var routerDiv = $("#routerDiv");
            routerDiv.addClass("disabled");

            var finishTab = $("#finishTab");
            finishTab.addClass("disabled");
          }
        }
      });
    });
  }

  openFinishModal() {
    var modal_obj: any = $("#finishProject");
    modal_obj.modal("show");
  }
}
