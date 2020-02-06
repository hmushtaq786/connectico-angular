import { Component, OnInit } from "@angular/core";

declare const loginModal: any;
declare const registerModal: any;

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  register = () => {
    registerModal();
  };

  login = () => {
    loginModal();
  };
}
