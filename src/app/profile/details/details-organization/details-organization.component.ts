import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details-organization",
  templateUrl: "./details-organization.component.html",
  styleUrls: ["./details-organization.component.css"]
})
export class DetailsOrganizationComponent implements OnInit {
  user: any;
  org: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
  }
}
