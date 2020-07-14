import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";
import jsPDF from "jspdf";
import { ConnectionService } from "src/app/connection.service";

@Component({
  selector: "app-completed-team",
  templateUrl: "./completed-team.component.html",
  styleUrls: ["./completed-team.component.css"],
})
export class CompletedTeamComponent implements OnInit {
  @Input() currentTeam: any;

  comment_attached = false;
  file_attached = false;
  org;
  project: string;
  workspace: string;
  team_lead = {
    id: 0,
    photo_address: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  teamMembers = [];
  totalTeamMembers = 0;

  constructor(
    private router: Router,
    private dataService: DataService,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    this.dataService.currentCompletedTeam.subscribe((data) => {
      this.currentTeam = data;
      console.log(this.currentTeam);
      if (this.currentTeam.tm_submitted_comment != undefined) {
        this.comment_attached = true;
      }
      if (this.currentTeam.tm_submitted_filepath != undefined) {
        this.file_attached = true;
      }
      let orgUsers = JSON.parse(localStorage.getItem("org-members"));
      for (var user of orgUsers) {
        if (this.currentTeam.team_lead_id == user.id) {
          this.team_lead = user;
        }
      }

      this.connectionService
        .getProjectByPID(this.currentTeam.project_id)
        .subscribe(
          (getProjectByPIDResult: any) => {
            console.log(getProjectByPIDResult);
            this.project = getProjectByPIDResult[0].p_name;
            let orgWorkspaces = JSON.parse(
              localStorage.getItem("org-workspaces")
            );
            for (var workspace of orgWorkspaces) {
              if (getProjectByPIDResult[0].workspace_id == workspace.w_id) {
                this.workspace = workspace.w_name;
              }
            }
          },
          (error) => {
            console.log(error);
          }
        );

      this.connectionService
        .getTotalTeams("t" + this.currentTeam.tm_id)
        .subscribe(
          (getTotalTeamsResult: any) => {
            // console.log(getTotalTeamsResult);
            getTotalTeamsResult.forEach((member) => {
              if (member.u_id__id != this.team_lead.id) {
                this.teamMembers.push(member);
              }
            });
            this.totalTeamMembers = this.teamMembers.length;
          },
          (error) => {
            console.log(error);
          }
        );

      this.org = JSON.parse(localStorage.getItem("org"));
    });
  }

  getDate(date) {
    date = new Date(Date.parse(date));

    return date.getDate();
  }
  getMonth(date) {
    date = new Date(Date.parse(date));

    return date.getMonth();
  }
  getYear(date) {
    date = new Date(Date.parse(date));

    return date.getFullYear();
  }

  navigateToMessages() {
    // console.log(this.currentTeam);
    var membersModal: any = $("#completedTeam");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }

  generateReport() {
    // var doc = new jsPDF({ unit: "px" });
    // // doc.addImage(user.photo_address, "JPEG", 50, 50, 100, 100);
    // doc.text("|", 148.5, 100, { align: "center" });
    // doc.text(org.name, 148.5, 100, { align: "center" });
    // doc.save(this.currentTeam.tm_name + "(completion-report).pdf");
    var template = $("#templateDiv");
    var generated_html = template.html();
    var cleaned_html = generated_html.replace('_ngcontent-bam-c5=""', "");

    var mywindow = window.open("", "PRINT", "height=400,width=600");

    mywindow.document.title = this.currentTeam.tm_name + "-completion_report";
    mywindow.document.write(cleaned_html);
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    // mywindow.close();

    // this.download("test.html", cleaned_html);
  }

  download(filename, text) {
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    pom.setAttribute("download", filename);

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }
}
