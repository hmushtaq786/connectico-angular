import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-organization-actions",
  templateUrl: "./organization-actions.component.html",
  styleUrls: ["./organization-actions.component.css"]
})
export class OrganizationActionsComponent implements OnInit {
  currentSection = "New workspace";
  constructor() {}

  ngOnInit() {}

  changeSection = event => {
    this.currentSection = event.target.innerText;
  };
}
