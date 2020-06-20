import { Component, OnInit, Input } from "@angular/core";
import { ConnectionService } from "src/app/connection.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

declare const errorModal: any;

@Component({
  selector: "app-submit-task",
  templateUrl: "./submit-task.component.html",
  styleUrls: ["./submit-task.component.css"],
})
export class SubmitTaskComponent implements OnInit {
  @Input() currentTask;

  updatedTask = {
    t_status: 1,
    submitted_comment: "",
    submitted_filepath: "",
    completed: true,
  };

  submitTaskForm = new FormGroup({
    comment: new FormControl(),
  });

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {}

  submitTask() {
    $("#taskSubmitBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    this.updatedTask.submitted_comment = this.submitTaskForm.get(
      "comment"
    ).value;

    this.connectionService
      .uploadSubmittedTaskFile(this.updatedTask.submitted_filepath)
      .subscribe(
        (uploadSubmittedTaskFileResult: any) => {
          this.updatedTask.submitted_filepath =
            uploadSubmittedTaskFileResult.secure_url;
          this.connectionService
            .submitUpdatedTask(this.updatedTask, this.currentTask.t_id)
            .subscribe(
              (submitUpdatedTaskResult: any) => {
                this.data.changeErrorModalMessage(
                  "Task submitted successfully."
                );
                var submitModal: any = $("#submitTask");
                $("#taskSubmitBtn").html("Submit").removeClass("disabled");
                submitModal.modal("hide");
                errorModal();
                $("#errorModal").on("hidden.bs.modal", () => {
                  this.router
                    .navigateByUrl("/loading", { skipLocationChange: true })
                    .then(() => {
                      this.router.navigate(["task/assigned"]);
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
    this.updatedTask.submitted_filepath = event.target.files[0];
  };
}
