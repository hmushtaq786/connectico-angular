import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute } from "@angular/router";
import { ConnectionService } from "../connection.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  team: any;
  teams;
  screen = "team_home";
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

    this.teams = JSON.parse(localStorage.getItem("user-teams"));

    this.activatedRoute.paramMap.subscribe((params) => {
      this.teams.forEach((element) => {
        if (element.t_id__tm_id == +params.get("id")) {
          // + is for converting the string to int
          this.team = element;
          this.dataService.changeCurrentTeam(this.team);
        }
      });
    });
  }

  // fold() {
  //   $(".left-column").toggleClass("col-md-1");
  //   $(".left-column").toggleClass("col-md-2");
  //   $(".right-column").toggleClass("col-md-10");
  //   $(".right-column").toggleClass("col-md-11");

  //   $(".heading-column a i").toggleClass("icons");

  //   $(".heading-column").toggleClass("heading-column-min");
  //   $(".right-column").toggleClass("right-column-min");
  // }
}
