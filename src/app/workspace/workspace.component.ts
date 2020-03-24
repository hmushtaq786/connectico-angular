import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ConnectionService } from "../connection.service";

@Component({
  selector: "app-workspace",
  templateUrl: "./workspace.component.html",
  styleUrls: ["./workspace.component.css"]
})
export class WorkspaceComponent implements OnInit {
  workspace: any;
  workspaces;
  screen = "workspace_home";
  page = "Home";
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    console.log(tokenCookie);
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.workspaces = JSON.parse(localStorage.getItem("org-workspaces"));

    // let id = this.activatedRoute.snapshot.paramMap.get("id");

    // workspaces.forEach(element => {
    //   if (id == element.w_id) {
    //     this.workspace = element;
    //   }
    // });
    this.activatedRoute.paramMap.subscribe(params => {
      this.workspaces.forEach(element => {
        if (element.w_id == +params.get("id")) {
          // + is for converting the string to int
          this.workspace = element;
        }
      });
    });

    this.connectionService
      .membersOfWorkspace("w" + this.workspace.w_id)
      .subscribe(
        (membersOfWorkspaceResult: any) => {
          localStorage.setItem(
            "workspace-members",
            JSON.stringify(membersOfWorkspaceResult)
          );
        },
        error => {
          console.log(error);
        }
      );
  }

  leftbar_click(event) {
    if (event.target.innerText === "Home") {
      this.screen = "workspace_home";
      this.page = "Home";
    } else if (event.target.innerText === "Feed") {
      this.screen = "feed";
      this.page = "Feed";
    } else if (event.target.innerText === "Projects") {
      this.screen = "workspace_project";
      this.page = "Projects";
    } else if (event.target.innerText === "Events") {
      this.screen = "workspace_event";
      this.page = "Events";
    } else if (event.target.innerText === "Files") {
      this.screen = "workspace_files";
      this.page = "Files";
    }
  }
}
