import { Component, OnInit } from "@angular/core";

declare const stepper: any;

@Component({
  selector: "app-register-modal",
  templateUrl: "./register-modal.component.html",
  styleUrls: ["./register-modal.component.css"]
})
export class RegisterModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    stepper();
  }
}
