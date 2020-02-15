import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-organization-details-about",
  templateUrl: "./organization-details-about.component.html",
  styleUrls: ["./organization-details-about.component.css"]
})
export class OrganizationDetailsAboutComponent implements OnInit {
  user: any;
  org: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
  }
}
