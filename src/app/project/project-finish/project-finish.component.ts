import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

declare const errorModal: any;

@Component({
  selector: "app-project-finish",
  templateUrl: "./project-finish.component.html",
  styleUrls: ["./project-finish.component.css"],
})
export class ProjectFinishComponent implements OnInit {
  @Input() currentProject;

  updatedProject = {
    p_completed: true,
    p_submitted_comment: "",
    p_submitted_filepath: "",
  };

  submitProjectForm = new FormGroup({
    comment: new FormControl(),
  });

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}

  submitProject() {
    $("#projectFinishBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    this.updatedProject.p_submitted_comment = this.submitProjectForm.get(
      "comment"
    ).value;

    this.connectionService
      .uploadCompletedProjectFile(this.updatedProject.p_submitted_filepath)
      .subscribe(
        (uploadCompletedProjectFileResult: any) => {
          this.updatedProject.p_submitted_filepath =
            uploadCompletedProjectFileResult.secure_url;
          this.connectionService
            .submitUpdatedProject(
              this.updatedProject,
              this.currentProject.p_id__p_id
            )
            .subscribe(
              (submitUpdatedProjectResult: any) => {
                this.data.changeErrorModalMessage(
                  "Project work completed successfully."
                );
                var submitModal: any = $("#finishProject");
                $("#projectFinishBtn").html("Submit").removeClass("disabled");
                submitModal.modal("hide");
                errorModal();
                $("#errorModal").on("hidden.bs.modal", () => {
                  this.router
                    .navigateByUrl("/loading", { skipLocationChange: true })
                    .then(() => {
                      this.router.navigate([
                        "project/" + this.currentProject.p_id__p_id,
                      ]);
                    });
                });
              },
              (error) => {
                this.data.changeErrorModalMessage(
                  error.error.p_submitted_comment[0]
                );
                var submitModal: any = $("#finishProject");
                $("#projectFinishBtn").html("Submit").removeClass("disabled");
                // submitModal.modal("hide");
                errorModal();
              }
            );
        },
        (error) => {
          this.data.changeErrorModalMessage(error.error.error.message);
          var submitModal: any = $("#finishProject");
          $("#projectFinishBtn").html("Submit").removeClass("disabled");
          // submitModal.modal("hide");
          errorModal();
        }
      );
  }

  userFileSelected = (event) => {
    this.updatedProject.p_submitted_filepath = event.target.files[0];
  };
}
