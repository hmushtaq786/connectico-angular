import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { ConnectionService } from "../connection.service";
import Pusher from "pusher-js";
import { element } from "protractor";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  messages = [
    {
      first_name: "Hamza",
      last_name: "Mushtaq",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "Hey text me when you get back we need to work on this project soon.",
    },
    {
      first_name: "Umar",
      last_name: "Shah",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "It was so nice to meet you. Let's catch up again sometime. See you.",
    },
    {
      first_name: "Iqra",
      last_name: "Khan",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body: "That's great!",
    },
    {
      first_name: "Hamza",
      last_name: "Mushtaq",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "Hey text me when you get back we need to work on this project soon.",
    },
    {
      first_name: "Umar",
      last_name: "Shah",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "It was so nice to meet you. Let's catch up again sometime. See you.",
    },
    {
      first_name: "Iqra",
      last_name: "Khan",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body: "That's great!",
    },
    {
      first_name: "Hamza",
      last_name: "Mushtaq",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "Hey text me when you get back we need to work on this project soon.",
    },
    {
      first_name: "Umar",
      last_name: "Shah",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "It was so nice to meet you. Let's catch up again sometime. See you.",
    },
    {
      first_name: "Iqra",
      last_name: "Khan",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body: "That's great!",
    },
    {
      first_name: "Hamza",
      last_name: "Mushtaq",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "Hey text me when you get back we need to work on this project soon.",
    },
    {
      first_name: "Umar",
      last_name: "Shah",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "It was so nice to meet you. Let's catch up again sometime. See you.",
    },
    {
      first_name: "Iqra",
      last_name: "Khan",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body: "That's great!",
    },
    {
      first_name: "Hamza",
      last_name: "Mushtaq",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "Hey text me when you get back we need to work on this project soon.",
    },
    {
      first_name: "Umar",
      last_name: "Shah",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "It was so nice to meet you. Let's catch up again sometime. See you.",
    },
    {
      first_name: "Iqra",
      last_name: "Khan",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body: "That's great!",
    },
    {
      first_name: "Hamza",
      last_name: "Mushtaq",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "Hey text me when you get back we need to work on this project soon.",
    },
    {
      first_name: "Umar",
      last_name: "Shah",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body:
        "It was so nice to meet you. Let's catch up again sometime. See you.",
    },
    {
      first_name: "Iqra",
      last_name: "Khan",
      photo_address:
        "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
      message_body: "That's great!",
    },
  ];

  user: any;

  private pusherClient: Pusher;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private connectionService: ConnectionService
  ) {
    this.pusherClient = new Pusher("c2c29162a0876ff05eae", { cluster: "ap2" });

    const channel = this.pusherClient.subscribe("my-channel");
    var count = 0;
    channel.bind("my-event", (data) => {
      alert(JSON.stringify(data));
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    const tokenCookie = this.cookieService.get("auth-token");
    console.log(tokenCookie);
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }
    this.connectionService.getUserMessages("u" + this.user.id).subscribe(
      (getUserMessagesResult: any) => {
        console.log("messages");
        console.log(getUserMessagesResult);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
