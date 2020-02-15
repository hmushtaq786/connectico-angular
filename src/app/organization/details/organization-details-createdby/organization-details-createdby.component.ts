import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-organization-details-createdby",
  templateUrl: "./organization-details-createdby.component.html",
  styleUrls: ["./organization-details-createdby.component.css"]
})
export class OrganizationDetailsCreatedbyComponent implements OnInit {
  user: any;
  org: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
  }
}
