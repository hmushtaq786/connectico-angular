import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-organization-avatar",
  templateUrl: "./organization-avatar.component.html",
  styleUrls: ["./organization-avatar.component.css"]
})
export class OrganizationAvatarComponent implements OnInit {
  user: any;
  org: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
  }
}
