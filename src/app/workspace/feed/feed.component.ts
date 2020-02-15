import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  user: any;
  org: any;

  tempUsers: any;

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
    this.tempUsers = [
      {
        first_name: "Hamza",
        last_name: "Mushtaq",
        email: "somemeail@gmail.com",
        photo_address: this.user.photo_address
      },
      {
        first_name: "Umer",
        last_name: "Khan",
        email: "somemeail@gmail.com",
        photo_address: this.user.photo_address
      },
      {
        first_name: "Ahsan",
        last_name: "Ali",
        email: "somemeail@gmail.com",
        photo_address: this.user.photo_address
      },
      {
        first_name: "Adil",
        last_name: "Shiekh",
        email: "somemeail@gmail.com",
        photo_address: this.user.photo_address
      },
      {
        first_name: "Iqbal",
        last_name: "Raza",
        email: "somemeail@gmail.com",
        photo_address: this.user.photo_address
      }
    ];
  }
}
