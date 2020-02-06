import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details-structure",
  templateUrl: "./details-structure.component.html",
  styleUrls: ["./details-structure.component.css"]
})
export class DetailsStructureComponent implements OnInit {
  currentSection = "About";
  constructor() {}

  ngOnInit() {}

  changeSection = event => {
    this.currentSection = event.target.innerText;
  };
}
