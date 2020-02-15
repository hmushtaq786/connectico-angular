import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.css"]
})
export class AvatarComponent implements OnInit {
  avatar: string;
  user: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
