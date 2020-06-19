import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "organization-structure",
  templateUrl: "./structure.component.html",
  styleUrls: ["./structure.component.css"],
})
export class OrganizationStructureComponent implements OnInit {
  org: any;
  user: any;
  superUser = false;

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.org = JSON.parse(localStorage.getItem("org"));
    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.org.created_by == this.user.id) {
      this.superUser = true;
    }
  }
}
