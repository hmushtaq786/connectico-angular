import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-project-members",
  templateUrl: "./show-project-members.component.html",
  styleUrls: ["./show-project-members.component.css"],
})
export class ShowProjectMembersComponent implements OnInit {
  @Input() currentProject;

  projMembers: any;
  projectMembers: any;

  constructor() {}

  ngOnInit() {}

  sendMessage() {}
}
