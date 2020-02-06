import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.css"]
})
export class LoginModalComponent implements OnInit {
  checked = 0;

  constructor() {}

  ngOnInit() {}

  checkbox_click() {
    if (this.checked == 0) {
      this.checked = 1;
    } else {
      this.checked = 0;
    }
  }
}
