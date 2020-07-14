import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

declare const errorModal: any;

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.component.html",
  styleUrls: ["./create-team.component.css"],
})
export class CreateTeamComponent implements OnInit {
  @Input() currentProject;

  projMembers: any;

  teamForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    teamLead: new FormControl(),
  });

  team = {
    tm_name: "",
    tm_description: "",
    tm_start_date: "",
    tm_end_date: "",
    project_id: "",
    team_lead_id: 0,
    created_by: "",
  };

  data = {
    u_id: "",
    t_id: "",
    r_id: 2, //by default Workspace User = 2
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    $(document).ready(function () {
      var comp: any = $(".mdb-select");
      comp.materialSelect();
    });

    this.connectionService
      .getTotalProjects("p" + this.currentProject.p_id__p_id)
      .subscribe(
        (getTotalProjectsResult: any) => {
          this.projMembers = getTotalProjectsResult;
          console.log(this.projMembers);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createTeam() {
    $("#teamCreateBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));
    var org = JSON.parse(localStorage.getItem("org"));

    this.team.tm_name = this.teamForm.get("name").value;
    this.team.tm_description = this.teamForm.get("description").value;
    this.team.tm_start_date = this.teamForm.get("startDate").value;
    this.team.tm_end_date = this.teamForm.get("endDate").value;
    this.team.project_id = this.currentProject.p_id__p_id;
    this.team.team_lead_id = +$("#selectTL").children("option:selected").val();
    this.team.created_by = user.id;

    // console.log(this.project);

    this.connectionService.createTeam(this.team).subscribe(
      (createTeamResult: any) => {
        this.data.u_id = user.id;
        this.data.t_id = createTeamResult.tm_id;

        this.connectionService.addMemberTeam(this.data).subscribe(
          (addMemberTeamResult: any) => {
            this.dataService.changeErrorModalMessage(
              "New team created successfully."
            );
            var createModal: any = $("#createTeam");
            $("#teamCreateBtn").html("Create").removeClass("disabled");
            createModal.modal("hide");
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
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
