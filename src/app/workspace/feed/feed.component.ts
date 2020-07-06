import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  currentWorkspace;

  user: any;
  org: any;
  members: any;

  tempUsers: any;

  userPostsData: any;

  postForm = new FormGroup({
    postContent: new FormControl(),
  });

  commentForm = new FormGroup({
    commentContent: new FormControl(),
    commentPostID: new FormControl(),
  });

  postObj = {
    pst_content: "",
    created_by: "",
    pst_filepath: "",
    workspace_id: "",
    pst_filename: "",
  };

  commentObj = {
    c_content: "",
    created_by: "",
    post_id: "",
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const tokenCookie = this.cookieService.get("auth-token");
    if (!tokenCookie) {
      this.router.navigate(["/"]);
    }

    this.dataService.currentWorkspace.subscribe(
      (data) => (this.currentWorkspace = data)
    );

    this.user = JSON.parse(localStorage.getItem("user"));
    this.org = JSON.parse(localStorage.getItem("org"));
    // this.members = JSON.parse(localStorage.getItem("workspace-members"));

    this.getPosts();

    this.connectionService
      .WorkspaceMembersData(this.currentWorkspace.w_id)
      .subscribe(
        (WorkspaceMembersDataResult: any) => {
          this.members = WorkspaceMembersDataResult;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createPost() {
    $("#workspacePostBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");
    this.postObj.pst_content = this.postForm.get("postContent").value;
    this.postObj.created_by = this.user.id;
    this.postObj.workspace_id = this.currentWorkspace.w_id;
    this.postObj.pst_filename = this.postObj.pst_filepath["name"];

    this.connectionService
      .uploadWorkspaceFile(this.postObj.pst_filepath)
      .subscribe(
        (UploadWorkspaceFileResult: any) => {
          this.postObj.pst_filepath = UploadWorkspaceFileResult.secure_url;
          this.connectionService.createWorkspacePost(this.postObj).subscribe(
            (CreateWorkspacePostResult: any) => {
              this.router
                .navigateByUrl("/loading", { skipLocationChange: true })
                .then(() => {
                  this.router.navigate([
                    "workspace/" + this.currentWorkspace.w_id + "/feed",
                  ]);
                });
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

  userFileSelected = (event) => {
    this.postObj.pst_filepath = event.target.files[0];
  };

  formatDate(date) {
    date = new Date(Date.parse(date));
    let diffMs = Date.now() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = Math.floor(diffSec / 60);
    let diffHour = Math.floor(diffMin / 60);

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
    }
  }

  getPosts() {
    this.connectionService
      .getWorkspacePostsByWID(this.currentWorkspace.w_id)
      .subscribe(
        (GetWorkspacePostsByWIDResult: any) => {
          this.userPostsData = GetWorkspacePostsByWIDResult;
          this.getComments();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getComments() {
    this.userPostsData.forEach((post) => {
      this.connectionService.getWorkspaceCommentByPID(post.pst_id).subscribe(
        (GetWorkspaceCommentByPIDResult: any) => {
          post["commentData"] = GetWorkspaceCommentByPIDResult;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  createComment(id) {
    this.commentObj.c_content = this.commentForm.get("commentContent").value;
    this.commentObj.created_by = this.user.id;
    this.commentObj.post_id = id;

    this.connectionService.createWorkspaceComment(this.commentObj).subscribe(
      (CreateWorkspaceCommentResult: any) => {
        console.log(CreateWorkspaceCommentResult);
        this.router
          .navigateByUrl("/loading", { skipLocationChange: true })
          .then(() => {
            this.router.navigate([
              "workspace/" + this.currentWorkspace.w_id + "/feed",
            ]);
          });
      },
      (error) => console.log(error)
    );
  }
}
