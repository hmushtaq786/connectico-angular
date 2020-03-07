import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "../../../connection.service";

declare const errorModal: any;

@Component({
  selector: "app-create-workspace",
  templateUrl: "./create-workspace.component.html",
  styleUrls: ["./create-workspace.component.css"]
})
export class CreateWorkspaceComponent implements OnInit {
  modalMessage = "<System message>";

  workspaceForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    address: new FormControl()
  });

  workspace = {
    w_name: "",
    description: "",
    w_address: "",
    organization_id: "",
    created_by: ""
  };

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {}

  createWorkspace() {
    $("#createBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));
    var org = JSON.parse(localStorage.getItem("org"));

    this.workspace.w_name = this.workspaceForm.get("name").value;
    this.workspace.description = this.workspaceForm.get("description").value;
    this.workspace.w_address = this.workspaceForm.get("address").value;
    this.workspace.organization_id = org.id;
    this.workspace.created_by = user.id;

    this.connectionService.createWorkspace(this.workspace).subscribe(
      (createWorkspaceResult: any) => {
        console.log(createWorkspaceResult);
        this.modalMessage = "New workspace created successfully!";
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
