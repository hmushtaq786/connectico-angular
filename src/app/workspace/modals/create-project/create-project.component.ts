import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/data.service";

declare const errorModal: any;

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.css"],
})
export class CreateProjectComponent implements OnInit {
  @Input() currentWorkspace;

  workspaceMembers = [];

  orgMembers: any;

  projectForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    projectManager: new FormControl(),
  });

  project = {
    p_name: "",
    p_description: "",
    p_start_date: "",
    p_end_date: "",
    p_status: "",
    workspace_id: "",
    p_manager_id: 0,
    created_by: "",
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {
    $(document).ready(function () {
      var comp: any = $(".mdb-select");
      comp.materialSelect();
    });

    this.orgMembers = JSON.parse(localStorage.getItem("org-members"));

    this.connectionService
      .membersOfWorkspace("w" + this.currentWorkspace.w_id)
      .subscribe(
        (membersOfWorkspaceResult: any) => {
          OuterLoop: for (var wcMember of membersOfWorkspaceResult) {
            if (wcMember.w_id == this.currentWorkspace.w_id) {
              InnerLoop: for (var orgMember of this.orgMembers) {
                if (wcMember.u_id == orgMember.id) {
                  this.workspaceMembers.push({
                    id: orgMember.id,
                    first_name: orgMember.first_name,
                    last_name: orgMember.last_name,
                  });
                  break InnerLoop;
                }
              }
            }
          }

          // console.log(this.workspaceMembers);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createProject() {
    $("#projectCreateBtn")
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
    this.project.p_status = "ACTIVE";
    this.project.workspace_id = this.currentWorkspace.w_id;
    this.project.p_manager_id = +$("#selectPM")
      .children("option:selected")
      .val();
    this.project.created_by = user.id;

    // console.log(this.project);

    this.connectionService.createProject(this.project).subscribe(
      (createProjectResult: any) => {
        // console.log(createProjectResult);
        this.data.changeErrorModalMessage("New project created successfully.");
        var createModal: any = $("#createProject");
        $("#projectCreateBtn").html("Create").removeClass("disabled");
        createModal.modal("hide");
        errorModal();
        $("#errorModal").on("hidden.bs.modal", () => {
          this.router
            .navigateByUrl("/loading", { skipLocationChange: true })
            .then(() => {
              this.router.navigate(["workspace/" + this.currentWorkspace.w_id]);
            });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
