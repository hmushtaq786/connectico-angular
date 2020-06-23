import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-feed",
  templateUrl: "./project-feed.component.html",
  styleUrls: ["./project-feed.component.css"],
})
export class ProjectFeedComponent implements OnInit {
  @Input() currentProject;

  user: any;
  org: any;
  projMembers: any;

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
    project_id: "",
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
      .getTotalProjects("p" + this.currentProject.p_id__p_id)
      .subscribe(
        (getTotalProjectsResult: any) => {
          this.projMembers = getTotalProjectsResult;
        },
        (error) => {
          console.log(error);
        }
      );
  }

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

  createProjectPost() {
    $("#projectPostBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");
    this.postObj.pst_content = this.postForm.get("postContent").value;
    this.postObj.created_by = this.user.id;
    this.postObj.project_id = this.currentProject.p_id__p_id;
    this.postObj.pst_filename = this.postObj.pst_filepath["name"];
    this.connectionService
      .uploadProjectFile(this.postObj.pst_filepath)
      .subscribe(
        (UploadProjectFileResult: any) => {
          this.postObj.pst_filepath = UploadProjectFileResult.secure_url;
          this.connectionService.createProjectPost(this.postObj).subscribe(
            (CreateProjectPostResult: any) => {
              this.router
                .navigateByUrl("/loading", { skipLocationChange: true })
                .then(() => {
                  this.router.navigate([
                    "project/" + this.currentProject.p_id__p_id,
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
      .getProjectPostsByPID(this.currentProject.p_id__p_id)
      .subscribe(
        (GetProjectPostsByPIDResult: any) => {
          this.userPostsData = GetProjectPostsByPIDResult;
          this.getComments();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getComments() {
    this.userPostsData.forEach((post) => {
      this.connectionService.getProjectCommentByPID(post.pst_id).subscribe(
        (GetProjectCommentByPIDResult: any) => {
          post["commentData"] = GetProjectCommentByPIDResult;
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

    this.connectionService.createProjectComment(this.commentObj).subscribe(
      (CreateProjectCommentResult: any) => {
        this.router
          .navigateByUrl("/loading", { skipLocationChange: true })
          .then(() => {
            this.router.navigate(["project/" + this.currentProject.p_id__p_id]);
          });
      },
      (error) => console.log(error)
    );
  }
}
