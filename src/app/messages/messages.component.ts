import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { ConnectionService } from "../connection.service";
import Pusher from "pusher-js";
import { element } from "protractor";
import { DataService } from "../data.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  conversations;
  user: any;
  messageObject;
  lastMessages;

  private pusherClient: Pusher;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private connectionService: ConnectionService,
    private dataService: DataService
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

    this.connectionService.getUserConversations("u" + this.user.id).subscribe(
      (getUserConversationsResult: any) => {
        this.conversations = getUserConversationsResult;
        this.conversations.forEach((element) => {
          element.lastMessage = "";
          this.connectionService.getLastUserMessage(element.c_id).subscribe(
            (getLastUserMessageResult: any) => {
              element.lastMessage = getLastUserMessageResult;
            },
            (error) => {
              console.log(error);
            }
          );
          if (element.sender__id == this.user.id) {
            element["currentUser"] = {
              id: element.sender__id,
              username: element.sender__username,
              first_name: element.sender__first_name,
              last_name: element.sender__last_name,
              photo_address: element.sender__photo_address,
            };
            element["otherUser"] = {
              id: element.receiver__id,
              username: element.receiver__username,
              first_name: element.receiver__first_name,
              last_name: element.receiver__last_name,
              photo_address: element.receiver__photo_address,
            };

            delete element["sender__id"];
            delete element["sender__username"];
            delete element["sender__first_name"];
            delete element["sender__last_name"];
            delete element["sender__photo_address"];
            delete element["receiver__id"];
            delete element["receiver__username"];
            delete element["receiver__first_name"];
            delete element["receiver__last_name"];
            delete element["receiver__photo_address"];
          } else if (element.receiver__id == this.user.id) {
            element["currentUser"] = {
              id: element.receiver__id,
              username: element.receiver__username,
              first_name: element.receiver__first_name,
              last_name: element.receiver__last_name,
              photo_address: element.receiver__photo_address,
            };

            element["otherUser"] = {
              id: element.sender__id,
              username: element.sender__username,
              first_name: element.sender__first_name,
              last_name: element.sender__last_name,
              photo_address: element.sender__photo_address,
            };

            delete element["sender__id"];
            delete element["sender__username"];
            delete element["sender__first_name"];
            delete element["sender__last_name"];
            delete element["sender__photo_address"];
            delete element["receiver__id"];
            delete element["receiver__username"];
            delete element["receiver__first_name"];
            delete element["receiver__last_name"];
            delete element["receiver__photo_address"];
          }
        });
        console.log(this.conversations);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  changeOtherUser(slug, otherUser) {
    this.dataService.currentConversationWith(otherUser);
    this.connectionService.getUserMessages("s" + slug).subscribe(
      (getUserMessagesResult: any) => {
        console.log(getUserMessagesResult);
        this.messageObject = {
          messagesHistory: getUserMessagesResult,
          totalMessages: getUserMessagesResult.length,
          lastMessage: getUserMessagesResult[getUserMessagesResult.length - 1],
        };
        // this.messageObject["messagesHistory"] = getUserMessagesResult;
        // this.messageObject["totalMessages"] = getUserMessagesResult.length;

        this.messageObject["messagesHistory"].forEach((element) => {
          if (element.sent_by__id == otherUser.id) {
            element["received"] = true;
          } else {
            element["received"] = false;
          }
        });
        console.log(this.messageObject);
        this.dataService.changeCurrentHistory(this.messageObject);
      },
      (error) => {
        this.messageObject = {
          messagesHistory: null,
          totalMessages: 0,
        };
        this.dataService.changeCurrentHistory(this.messageObject);
        console.log(this.messageObject);
        console.log(error);
      }
    );
  }
}
