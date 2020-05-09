import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  @Input() currentWorkspace;

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
    private router: Router
  ) {}

  ngOnInit() {
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
                    "workspace/" + this.currentWorkspace.w_id,
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

  getPosts() {
    this.connectionService
      .getWorkspacePostsByWID(this.currentWorkspace.w_id)
      .subscribe(
        (GetWorkspacePostsByWIDResult: any) => {
          this.userPostsData = GetWorkspacePostsByWIDResult;
          console.log(GetWorkspacePostsByWIDResult);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createComment(id) {
    $("#workspaceCommentBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");
    this.commentObj.c_content = this.commentForm.get("commentContent").value;
    this.commentObj.created_by = this.user.id;
    this.commentObj.post_id = id;

    this.connectionService.createWorkspaceComment(this.commentObj).subscribe(
      (CreateWorkspaceCommentResult: any) => {
        console.log(CreateWorkspaceCommentResult);
        this.router
          .navigateByUrl("/loading", { skipLocationChange: true })
          .then(() => {
            this.router.navigate(["workspace/" + this.currentWorkspace.w_id]);
          });
      },
      (error) => console.log(error)
    );
  }
}
