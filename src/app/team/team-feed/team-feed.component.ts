import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-team-feed",
  templateUrl: "./team-feed.component.html",
  styleUrls: ["./team-feed.component.css"],
})
export class TeamFeedComponent implements OnInit {
  @Input() currentTeam;
  user: any;
  org: any;
  teamMembers: any;

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
    team_id: "",
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
      .getTotalTeams("t" + this.currentTeam.t_id__tm_id)
      .subscribe(
        (getTotalTeamsResult: any) => {
          this.teamMembers = getTotalTeamsResult;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createProjectPost() {
    $("#teamPostBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");
    this.postObj.pst_content = this.postForm.get("postContent").value;
    this.postObj.created_by = this.user.id;
    this.postObj.team_id = this.currentTeam.t_id__tm_id;
    this.postObj.pst_filename = this.postObj.pst_filepath["name"];
    this.connectionService.uploadTeamFile(this.postObj.pst_filepath).subscribe(
      (UploadTeamFileResult: any) => {
        this.postObj.pst_filepath = UploadTeamFileResult.secure_url;
        this.connectionService.createTeamPost(this.postObj).subscribe(
          (CreateTeamPostResult: any) => {
            this.router
              .navigateByUrl("/loading", { skipLocationChange: true })
              .then(() => {
                this.router.navigate(["team/" + this.currentTeam.t_id__tm_id]);
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
      .getTeamPostsByTID(this.currentTeam.t_id__tm_id)
      .subscribe(
        (GetTeamPostsByPIDResult: any) => {
          this.userPostsData = GetTeamPostsByPIDResult;
          this.getComments();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getComments() {
    this.userPostsData.forEach((post) => {
      this.connectionService.getTeamCommentByPID(post.pst_id).subscribe(
        (GetTeamCommentByPIDResult: any) => {
          post["commentData"] = GetTeamCommentByPIDResult;
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

    this.connectionService.createTeamComment(this.commentObj).subscribe(
      (CreateTeamCommentResult: any) => {
        this.router
          .navigateByUrl("/loading", { skipLocationChange: true })
          .then(() => {
            this.router.navigate(["team/" + this.currentTeam.t_id__tm_id]);
          });
      },
      (error) => console.log(error)
    );
  }
}
