import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
// import { CookieService } from "ngx-cookie-service";
import { CookieService } from "ngx-cookie-service";
import { ConnectionService } from "../connection.service";
import Pusher from "pusher-js";

declare const toastr: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  user: any;
  org: any;
  conversations: any;
  orgWorkspaces: any;
  workspaceProjects: any;
  projectTeams: any;
  tokenCookie: any;
  private pusherClient: Pusher;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService
  ) {
    this.pusherClient = new Pusher("c2c29162a0876ff05eae", { cluster: "ap2" });

    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));

    this.connectionService.getUserConversations("u" + this.user.id).subscribe(
      (getUserConversationsResult: any) => {
        this.conversations = getUserConversationsResult;
        var count = 0;
        this.conversations.forEach((element) => {
          let channel = this.pusherClient.subscribe(element.channel_name);
          channel.bind("message-received", (data) => {
            if (JSON.stringify(data.user_id) != this.user.id) {
              toastr["info"](JSON.stringify(data.message));
              count++;
              $("#navbarDropdownMessages").html(count.toString());
              $("#defaultmessagelist").remove();
              $("#messageslist").append(
                "<a class='dropdown-item menu-option' href='http://localhost:4200/messages'>" +
                  JSON.stringify(data.message) +
                  "</a>"
              );
            }
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );

    // const channel = this.pusherClient.subscribe("s71r41-iqra");
    // var count = 0;
    // channel.bind("message-received", (data) => {
    //   toastr["info"](JSON.stringify(data.message));
    // toast.info("Hi! I am info message.");
    // });
  }

  ngOnInit() {
    // this.orgWorkspaces = JSON.parse(localStorage.getItem("org-workspaces"));
    this.connectionService.getUserWorkspaces("u" + this.user.id).subscribe(
      (getOrgWorkspaces: any) => {
        this.orgWorkspaces = getOrgWorkspaces;
      },
      (error) => {
        console.log(error);
      }
    );

    this.connectionService.getTotalProjects("u" + this.user.id).subscribe(
      (GetTotalProjectsResult: any) => {
        this.workspaceProjects = GetTotalProjectsResult;
        localStorage.setItem(
          "user-projects",
          JSON.stringify(GetTotalProjectsResult)
        );
      },
      (error) => {
        console.log(error);
      }
    );

    this.connectionService.getTotalTeams("u" + this.user.id).subscribe(
      (GetTotalTeamsResult: any) => {
        this.projectTeams = GetTotalTeamsResult;
        localStorage.setItem("user-teams", JSON.stringify(GetTotalTeamsResult));
      },
      (error) => {
        console.log(error);
      }
    );

    //////SET LocalStorage ///////////////////////
    this.connectionService.getTotalWorkspaces(this.org.id).subscribe(
      (getTotalWorkspacesResult: any) => {
        localStorage.setItem(
          "org-workspaces",
          JSON.stringify(getTotalWorkspacesResult)
        );
      },
      (error) => {
        console.log(error);
      }
    );

    this.connectionService.getTotalMembers(this.org.id).subscribe(
      (getTotalMembersResult: any) => {
        localStorage.setItem(
          "org-members",
          JSON.stringify(getTotalMembersResult)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.cookieService.deleteAll();
    localStorage.clear();
    // this.cookieService.delete("auth-token");
    this.router.navigate(["/"]);
  }

  navigate(component, id) {
    this.router
      .navigateByUrl("/loading", { skipLocationChange: true })
      .then(() => {
        this.router.navigate([component + "/" + id]);
      });
  }
}
