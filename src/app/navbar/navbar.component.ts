import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: any;
  org: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
  }
}
