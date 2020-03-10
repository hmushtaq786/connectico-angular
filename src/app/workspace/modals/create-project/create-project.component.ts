import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";

declare const errorModal: any;

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.css"]
})
export class CreateProjectComponent implements OnInit {
  modalMessage = "<System message>";

  projectForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl()
  });

  project = {
    p_name: "",
    p_description: "",
    p_start_date: "",
    p_end_date: "",
    p_status: "",
    workspace_id: "",
    created_by: ""
  };

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {}

  createProject() {
    $("#createBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));
    var org = JSON.parse(localStorage.getItem("org"));

    this.project.p_name = this.projectForm.get("name").value;
    this.project.p_description = this.projectForm.get("description").value;
    this.project.p_start_date = this.projectForm.get("startDate").value;
    this.project.p_end_date = this.projectForm.get("endDate").value;
    this.project.p_status = "Created";
    this.project.workspace_id = org.id;
    this.project.created_by = user.id;

    this.connectionService.createWorkspace(this.project).subscribe(
      (createWorkspaceResult: any) => {
        console.log(createWorkspaceResult);
        this.modalMessage = "New project created successfully!";
        errorModal();
        $("#createBtn")
          .html("Create")
          .removeClass("disabled");
      },
      error => {
        console.log(error);
      }
    );
  }
}
