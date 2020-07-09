import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

declare const errorModal: any;

@Component({
  selector: "app-team-finish",
  templateUrl: "./team-finish.component.html",
  styleUrls: ["./team-finish.component.css"],
})
export class TeamFinishComponent implements OnInit {
  @Input() currentTeam;

  updatedTeam = {
    tm_completed: true,
    tm_submitted_comment: "",
    tm_submitted_filepath: "",
  };

  submitTeamForm = new FormGroup({
    comment: new FormControl(),
  });

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}

  submitTeam() {
    $("#teamFinishBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    this.updatedTeam.tm_submitted_comment = this.submitTeamForm.get(
      "comment"
    ).value;

    this.connectionService
      .uploadCompletedTeamFile(this.updatedTeam.tm_submitted_filepath)
      .subscribe(
        (uploadCompletedTeamFileResult: any) => {
          this.updatedTeam.tm_submitted_filepath =
            uploadCompletedTeamFileResult.secure_url;
          this.connectionService
            .submitUpdatedTeam(this.updatedTeam, this.currentTeam.t_id__tm_id)
            .subscribe(
              (submitUpdatedTeamResult: any) => {
                this.data.changeErrorModalMessage(
                  "Team work completed successfully."
                );
                var submitModal: any = $("#finishTeam");
                $("#teamFinishBtn").html("Submit").removeClass("disabled");
                submitModal.modal("hide");
                errorModal();
                $("#errorModal").on("hidden.bs.modal", () => {
                  this.router
                    .navigateByUrl("/loading", { skipLocationChange: true })
                    .then(() => {
                      this.router.navigate([
                        "team/" + this.currentTeam.t_id__tm_id,
                      ]);
                    });
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
    this.updatedTeam.tm_submitted_filepath = event.target.files[0];
  };
}
