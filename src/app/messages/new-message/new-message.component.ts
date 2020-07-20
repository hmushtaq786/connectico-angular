import { Component, OnInit } from "@angular/core";
import { slideInAnimation } from "src/app/route-animation";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-new-message",
  templateUrl: "./new-message.component.html",
  styleUrls: ["./new-message.component.css"],
  animations: [slideInAnimation],
})
export class NewMessageComponent implements OnInit {
  orgMembers: any;
  user: any;
  conversations: any;
  newMembers = []; //with whom we havent yet started the conversation

  messageForm = new FormGroup({
    content: new FormControl(),
  });

  conversation = {
    channel_name: "",
    sender: 0,
    receiver: 0,
  };

  message = {
    m_content: "",
    conversation: 0,
    sent_by: 0,
  };

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private connectionService: ConnectionService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    console.log(tokenCookie);
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }
    this.orgMembers = JSON.parse(localStorage.getItem("org-members"));
    this.user = JSON.parse(localStorage.getItem("user"));

    this.orgMembers.forEach((member) => {
      member["isAdded"] = false;
    });

    $(document).ready(function () {
      var comp: any = $(".mdb-select");
      comp.materialSelect();
    });
    this.connectionService.getUserConversations("u" + this.user.id).subscribe(
      (getUserConversationsResult: any) => {
        this.conversations = getUserConversationsResult;
        for (var oMember of this.orgMembers) {
          oMember["isAdded"] = false;
          InnerLoop: for (var cMember of this.conversations) {
            if (
              cMember.receiver__id == oMember.id ||
              cMember.sender__id == oMember.id
            ) {
              oMember["isAdded"] = true;
              break InnerLoop;
            }
          }
        }
        console.log("testing");
        console.log(this.orgMembers);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendMessage() {
    this.conversation.sender = this.user.id;
    this.conversation.receiver = +$("#selectMember")
      .children("option:selected")
      .val();
    var member: any;
    this.orgMembers.forEach((element) => {
      if (element.id == this.conversation.receiver) {
        member = element;
      }
    });

    this.conversation.channel_name =
      "s" +
      this.user.id +
      "r" +
      this.conversation.receiver +
      "-" +
      member.first_name.toLowerCase();

    this.connectionService.createNewConversation(this.conversation).subscribe(
      (createNewConversationResult: any) => {
        this.message.m_content = this.messageForm.get("content").value;
        this.message.sent_by = this.user.id;
        this.message.conversation = createNewConversationResult.c_id;

        this.connectionService.sendUserMessage(this.message).subscribe(
          (sendUserMessageResult: any) => {
            this.router.navigate(["/messages"]);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
