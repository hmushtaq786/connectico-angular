import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ConnectionService } from "../../../connection.service";

@Component({
  selector: "app-add-organization-members",
  templateUrl: "./add-organization-members.component.html",
  styleUrls: ["./add-organization-members.component.css"]
})
export class AddOrganizationMembersComponent implements OnInit {
  emailList = new FormGroup({
    emails: new FormControl()
  });
  list;
  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {}

  invite() {
    console.log(this.emailList.get("emails").value);
    var emailsString: string = this.emailList.get("emails").value;
    this.list = emailsString.split(";");
    this.connectionService.sendMemberInvites(this.list).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
