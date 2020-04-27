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

  postObj = {
    pst_content: "",
    created_by: "",
    pst_filepath: "",
    workspace_id: "",
    pst_filename: "",
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
              console.log(CreateWorkspacePostResult);
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
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
