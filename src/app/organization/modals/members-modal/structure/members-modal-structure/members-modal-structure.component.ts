import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-members-modal-structure",
  templateUrl: "./members-modal-structure.component.html",
  styleUrls: ["./members-modal-structure.component.css"]
})
export class MembersModalStructureComponent implements OnInit {
  orgMembers: any;

  constructor() {}

  ngOnInit() {
    this.orgMembers = JSON.parse(localStorage.getItem("org-members"));
  }
}
