import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-organization-details-structure",
  templateUrl: "./organization-details-structure.component.html",
  styleUrls: ["./organization-details-structure.component.css"]
})
export class OrganizationDetailsStructureComponent implements OnInit {
  currentSection = "About";
  constructor() {}

  ngOnInit() {}

  changeSection = event => {
    this.currentSection = event.target.innerText;
  };
}
