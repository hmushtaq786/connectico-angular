import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { CookieService } from "ngx-cookie-service";

import { ConnectionService } from "../../../connection.service";

declare const hideLoginModal: any;
declare const newUserModal: any;

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.css"]
})
export class LoginModalComponent implements OnInit {
  checked = 0;

  loginForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  first_login = {
    email: "",
    password: ""
  };

  normal_login = {
    username: "",
    password: ""
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.buttonLoader();
  }

  checkbox_click() {
    if (this.checked == 0) {
      this.checked = 1;
    } else {
      this.checked = 0;
    }
  }

  login = () => {
    if (this.checked == 0) {
      this.normal_login.username = this.loginForm.get("username").value;
      this.normal_login.password = this.loginForm.get("password").value;
      this.connectionService.loginUser(this.normal_login).subscribe(
        (authResult: any) => {
          this.cookieService.set("auth-token", authResult.token);
          this.connectionService.getUser(this.normal_login.username).subscribe(
            (getUserResult: any) => {
              this.connectionService
                .getOrganization(getUserResult.organization_id)
                .subscribe(
                  (getOrganizationResult: any) => {
                    localStorage.setItem("user", JSON.stringify(getUserResult));
                    localStorage.setItem(
                      "org",
                      JSON.stringify(getOrganizationResult)
                    );
                    hideLoginModal();
                    this.router.navigate(["profile"]);
                  },
                  error => {
                    console.log(error);
                  }
                );
            },
            error => {
              console.log(error);
            }
          );
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.first_login.email = this.loginForm.get("email").value;
      this.first_login.password = this.loginForm.get("password").value;
      this.connectionService.firstLogin(this.first_login).subscribe(
        (firstAuthResult: any) => {
          localStorage.setItem("temp-auth", JSON.stringify(firstAuthResult));
          hideLoginModal();
          newUserModal();
        },
        error => {
          console.log(error);
        }
      );
    }
  };

  buttonLoader() {
    $("#loginBtn").click(function() {
      $("#loginBtn")
        .html(
          'Login <span class="spinner-border spinner-border-sm mr-2" style="padding-left=10px" role="status" aria-hidden="true"></span>'
        )
        .addClass("disabled");
    });
  }
}
