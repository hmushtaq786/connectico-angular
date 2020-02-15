import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-status-box",
  templateUrl: "./status-box.component.html",
  styleUrls: ["./status-box.component.css"]
})
export class StatusBoxComponent implements OnInit {
  user: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
