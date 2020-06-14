import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-message-detail",
  templateUrl: "./message-detail.component.html",
  styleUrls: ["./message-detail.component.css"],
})
export class MessageDetailComponent implements OnInit, OnChanges {
  messageSlug;
  user;
  otherUser;
  messagesObject;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService,
    private dataService: DataService
  ) {
    // var otherUsername = this.messageSlug.split("-");
    // this.connectionService.getUser(otherUsername[0]).subscribe(
    //   (getUserResult: any) => {
    //     this.otherUser = getUserResult;
    //     console.log(getUserResult);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // this.connectionService.getUserMessages("s" + this.messageSlug).subscribe(
    //   (getUserMessagesResult: any) => {
    //     this.totalMessages = getUserMessagesResult.length;
    //     this.messagesHistory = getUserMessagesResult;
    //     this.messagesHistory.forEach((element) => {
    //       if (element.sent_by__id == this.otherUser.id) {
    //         element["received"] = true;
    //       } else {
    //         element["received"] = false;
    //       }
    //     });
    //     console.log(getUserMessagesResult);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  // ngDoCheck(): void {
  //   // this.ngOnInit();
  //   if (this.messageSlug !== this.oldSlug) {
  //     this.changeDetected = true;
  //     this.changeLog.push(
  //       `DoCheck: Hero name changed to "${this.messageSlug}" from "${this.oldSlug}"`
  //     );
  //     this.oldSlug = this.messageSlug;
  //     console.log(this.oldSlug);
  //     console.log(this.messageSlug);
  //   }
  // }

  ngOnInit() {
    this.dataService.otherUser.subscribe((data) => (this.otherUser = data));
    this.dataService.currentHistory.subscribe(
      (data) => (this.messagesObject = data)
    );
    console.log("details");
    console.log(this.messagesObject);

    this.activatedRoute.paramMap.subscribe((params) => {
      this.messageSlug = params.get("slug");
    });
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngchanges");
  }
}
