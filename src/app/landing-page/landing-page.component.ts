import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

import { Router } from "@angular/router";

declare const loginModal: any;
declare const registerModal: any;
declare const errorModal: any;

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (tokenCookie) {
      this.router.navigate(["/profile"]);
    }
  }

  register = () => {
    registerModal();
    // errorModal();
  };

  login = () => {
    loginModal();
  };
}
