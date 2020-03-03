import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "organization-structure",
  templateUrl: "./structure.component.html",
  styleUrls: ["./structure.component.css"]
})
export class OrganizationStructureComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    console.log(tokenCookie);
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }
  }
}
