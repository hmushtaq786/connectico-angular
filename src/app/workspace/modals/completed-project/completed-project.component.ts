import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-completed-project",
  templateUrl: "./completed-project.component.html",
  styleUrls: ["./completed-project.component.css"],
})
export class CompletedProjectComponent implements OnInit {
  @Input() currentProject: any;

  comment_attached = false;
  file_attached = false;
  org;
  project_manager = {
    id: 0,
    photo_address: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentCompletedProject.subscribe((data) => {
      this.currentProject = data;
      console.log(this.currentProject);
      if (this.currentProject.p_submitted_comment != undefined) {
        this.comment_attached = true;
      }
      if (this.currentProject.p_submitted_filepath != undefined) {
        this.file_attached = true;
      }
      let orgUsers = JSON.parse(localStorage.getItem("org-members"));

      for (var user of orgUsers) {
        if (this.currentProject.p_manager_id == user.id) {
          this.project_manager = user;
        }
      }
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
    var membersModal: any = $("#completedProject");
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

    mywindow.document.title = this.currentProject.p_name + "-completion_report";
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
