import { Component, OnInit } from "@angular/core";

import { CookieService } from "ngx-cookie-service";

import { Router } from "@angular/router";
import { ConnectionService } from "../../connection.service";
@Component({
  selector: "profile-structure",
  templateUrl: "./structure.component.html",
  styleUrls: ["./structure.component.css"]
})
export class ProfileStructureComponent implements OnInit {
  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }
  }
}
