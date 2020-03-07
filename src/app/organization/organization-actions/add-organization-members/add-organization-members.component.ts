import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ConnectionService } from "../../../connection.service";
import { number } from "@amcharts/amcharts4/core";
import { any } from "@amcharts/amcharts4/.internal/core/utils/Array";

declare const errorModal: any;

@Component({
  selector: "app-add-organization-members",
  templateUrl: "./add-organization-members.component.html",
  styleUrls: ["./add-organization-members.component.css"]
})
export class AddOrganizationMembersComponent implements OnInit {
  emailList = new FormGroup({
    emails: new FormControl()
  });
  list: any;
  org: any;

  inviteRequest = {
    org_id: number,
    list: any
  };

  modalMessage = "<System message>";

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {}

  invite() {
    $("#inviteBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" style="padding-left=10px" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var emailsString: string = this.emailList.get("emails").value;
    this.list = emailsString.split(";");
    this.org = JSON.parse(localStorage.getItem("org"));
    this.inviteRequest.org_id = this.org.id;
    this.inviteRequest.list = this.list;
    this.connectionService.sendMemberInvites(this.inviteRequest).subscribe(
      result => {
        this.modalMessage = "Invites sent successfully!";
        errorModal();
        $("#inviteBtn")
          .html("Send invite")
          .removeClass("disabled");
      },
      error => {
        console.log(error);
      }
    );
  }
}
