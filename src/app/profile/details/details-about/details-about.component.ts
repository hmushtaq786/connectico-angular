import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details-about",
  templateUrl: "./details-about.component.html",
  styleUrls: ["./details-about.component.css"]
})
export class DetailsAboutComponent implements OnInit {
  user: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
