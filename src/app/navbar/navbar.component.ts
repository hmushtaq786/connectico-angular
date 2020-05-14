import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { ConnectionService } from "../connection.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  user: any;
  org: any;
  orgWorkspaces: any;
  workspaceProjects: any;
  tokenCookie: any;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));

    // this.orgWorkspaces = JSON.parse(localStorage.getItem("org-workspaces"));
    this.connectionService.getTotalWorkspaces(this.org.id).subscribe(
      (getOrgWorkspaces: any) => {
        this.orgWorkspaces = getOrgWorkspaces;
      },
      (error) => {
        console.log(error);
      }
    );

    this.connectionService.getTotalProjects("u" + this.user.id).subscribe(
      (GetTotalProjectsResult: any) => {
        this.workspaceProjects = GetTotalProjectsResult;
        localStorage.setItem(
          "user-projects",
          JSON.stringify(GetTotalProjectsResult)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.cookieService.delete("auth-token");
    this.router.navigate(["/"]);
  }
}
