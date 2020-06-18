import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-members-modal-structure",
  templateUrl: "./members-modal-structure.component.html",
  styleUrls: ["./members-modal-structure.component.css"],
})
export class MembersModalStructureComponent implements OnInit {
  orgMembers: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.orgMembers = JSON.parse(localStorage.getItem("org-members"));
  }

  navigateToMessages() {
    var membersModal: any = $("#membersModal");
    membersModal.modal("hide");
    this.router.navigate(["messages/"]);
  }
}
