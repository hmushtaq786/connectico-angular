import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "../../../connection.service";
import { Router } from "@angular/router";

declare const errorModal: any;

@Component({
  selector: "app-create-workspace",
  templateUrl: "./create-workspace.component.html",
  styleUrls: ["./create-workspace.component.css"],
})
export class CreateWorkspaceComponent implements OnInit {
  modalMessage = "<System message>";

  workspaceForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    address: new FormControl(),
  });

  workspace = {
    w_name: "",
    description: "",
    w_address: "",
    organization_id: "",
    created_by: "",
    w_manager_id: 0,
  };
  orgMembers: any;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    $(document).ready(function () {
      var comp: any = $(".mdb-select");
      comp.materialSelect();
    });
    this.orgMembers = JSON.parse(localStorage.getItem("org-members"));
  }

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
    this.workspace.w_manager_id = +$("#selectMember")
      .children("option:selected")
      .val();

    this.connectionService.createWorkspace(this.workspace).subscribe(
      (createWorkspaceResult: any) => {
        console.log(createWorkspaceResult);
        this.modalMessage = "New workspace created successfully!";
        $("#createBtn").html("Create").removeClass("disabled");
        var error: any = $("#errorModal");
        errorModal();
        // $("#errorModal").on("hidden.bs.modal", this.reloadPage);
        $("#errorModal").on("hidden.bs.modal", () => {
          this.router
            .navigateByUrl("/loading", { skipLocationChange: true })
            .then(() => {
              errorModal();
              this.router.navigate(["organization"]);
            });
        });
        // this.router
        //   .navigateByUrl("/loading", { skipLocationChange: true })
        //   .then(() => {
        //     errorModal();
        //     this.router.navigate(["organization"]);
        //   });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  reloadPage() {
    window.location.reload();
    // this.router
    //   .navigateByUrl("/loading", { skipLocationChange: true })
    //   .then(() => {
    //     errorModal();
    //     this.router.navigate(["organization"]);
    //   });
  }
}
