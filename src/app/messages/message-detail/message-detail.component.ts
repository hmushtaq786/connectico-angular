import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { slideInAnimation } from "src/app/route-animation";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-message-detail",
  templateUrl: "./message-detail.component.html",
  styleUrls: ["./message-detail.component.css"],
  animations: [slideInAnimation],
})
export class MessageDetailComponent implements OnInit {
  messageSlug;
  user;
  otherUser;
  messagesObject;
  conversation_id;

  messageForm = new FormGroup({
    message: new FormControl(),
  });

  newMessage = {
    m_content: "",
    conversation: 0,
    sent_by: "",
  };

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.otherUser.subscribe((data) => (this.otherUser = data));
    this.dataService.currentHistory.subscribe(
      (data) => (this.messagesObject = data)
    );
    if (this.otherUser.first_name == undefined) {
      this.router.navigate(["/messages"]);
    }

    this.newMessage.m_content = "";

    this.activatedRoute.paramMap.subscribe((params) => {
      this.messageSlug = params.get("slug");
    });

    this.conversation_id = this.messageSlug.split("-")[1];
    this.dataService.changeConversationID(this.conversation_id);
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  formatDate(date) {
    // let dayOfMonth = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let hour = date.getHours();
    // let minutes = date.getMinutes();
    let diffMs = Date.now() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = Math.floor(diffSec / 60);
    let diffHour = Math.floor(diffMin / 60);

    // formatting
    // year = year.toString().slice(-2);
    // month = month < 10 ? "0" + month : month;
    // dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    // hour = hour < 10 ? "0" + hour : hour;
    // minutes = minutes < 10 ? "0" + minutes : minutes;

    if (diffSec < 1) {
      return "right now";
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`;
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`;
    } else if (diffHour == 1) {
      return `${diffHour} hr. ago`;
    } else if (diffHour < 24) {
      return `${diffHour} hrs. ago`;
    } else {
      return date.toLocaleTimeString() + " - " + date.toLocaleDateString();
      // return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }
  }

  sendMessage() {
    this.newMessage.m_content = this.messageForm.get("message").value;
    this.newMessage.conversation = +this.messagesObject.lastMessage
      .conversation__c_id;
    this.newMessage.sent_by = this.user.id;

    this.connectionService.sendUserMessage(this.newMessage).subscribe(
      (sendUserMessageResult: any) => {
        console.log(sendUserMessageResult);
        $("#messageContent").val("");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
