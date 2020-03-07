import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import data from "../../../../assets/api_key.json";

@Component({
  selector: "app-organization-details-location",
  templateUrl: "./organization-details-location.component.html",
  styleUrls: ["./organization-details-location.component.css"]
})
export class OrganizationDetailsLocationComponent implements OnInit {
  org: any;
  API_KEY: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.org = JSON.parse(localStorage.getItem("org"));
    this.API_KEY = (<any>data).API_KEY;
  }
}
