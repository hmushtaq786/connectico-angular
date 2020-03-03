import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ConnectionService } from "../../../connection.service";
import { number } from "@amcharts/amcharts4/core";
import { any } from "@amcharts/amcharts4/.internal/core/utils/Array";

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

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {}

  invite() {
    console.log(this.emailList.get("emails").value);
    var emailsString: string = this.emailList.get("emails").value;
    this.list = emailsString.split(";");
    this.org = JSON.parse(localStorage.getItem("org"));
    this.inviteRequest.org_id = this.org.id;
    this.inviteRequest.list = this.list;
    this.connectionService.sendMemberInvites(this.inviteRequest).subscribe(
      result => {
        alert("Invites sent successfully!");
      },
      error => {
        console.log(error);
      }
    );
  }
}
