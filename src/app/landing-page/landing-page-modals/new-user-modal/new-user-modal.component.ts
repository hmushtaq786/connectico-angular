import { Component, OnInit } from "@angular/core";
import $ from "jquery";
import { FormControl, FormGroup } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { ConnectionService } from "../../../connection.service";

declare const hideNewUserModal: any;
declare const errorModal: any;

@Component({
  selector: "app-new-user-modal",
  templateUrl: "./new-user-modal.component.html",
  styleUrls: ["./new-user-modal.component.css"],
})
export class NewUserModalComponent implements OnInit {
  temp_auth = {
    id: 0,
    email: "",
    organization_id: 0,
    password: "",
  };

  fixed_email = "";

  newUserForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    status_line: new FormControl(),
    email: new FormControl(),
    phone_number: new FormControl(),
    photo_address: new FormControl(),
  });

  user = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    status_line: "",
    email: "",
    phone_number: "",
    photo_address: "",
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.buttonLoader();
  }

  userFileSelected = (event) => {
    this.user.photo_address = event.target.files[0];
  };

  newUserRegister() {
    this.temp_auth = JSON.parse(localStorage.getItem("temp-auth"));
    if (this.temp_auth != null) {
      this.fixed_email = this.temp_auth.email;
    }
    this.user.username = this.newUserForm.get("username").value;
    this.user.password = this.newUserForm.get("password").value;
    this.user.first_name = this.newUserForm.get("first_name").value;
    this.user.last_name = this.newUserForm.get("last_name").value;
    this.user.status_line = this.newUserForm.get("status_line").value;
    this.user.email = this.fixed_email;
    this.user.phone_number = this.newUserForm.get("phone_number").value;

    this.connectionService.uploadUserPhoto(this.user.photo_address).subscribe(
      (userPhotoResult: any) => {
        this.user.photo_address = userPhotoResult.secure_url;
        console.log(this.temp_auth);
        this.user["organization_id"] = this.temp_auth.organization_id;

        this.user["org_creator"] = false;
        console.log(this.user);
        this.connectionService.registerUser(this.user).subscribe(
          (userRegisterResult: any) => {
            this.connectionService.getUser(this.user.username).subscribe(
              (getUserResult: any) => {
                localStorage.setItem("user", JSON.stringify(getUserResult));
                this.connectionService
                  .getOrganization(this.temp_auth.organization_id)
                  .subscribe(
                    (getOrgResult: any) => {
                      localStorage.setItem("org", JSON.stringify(getOrgResult));
                      var loginData = {
                        username: getUserResult.username,
                        password: this.user.password,
                      };
                      this.connectionService.loginUser(loginData).subscribe(
                        (loginUserResult: any) => {
                          this.connectionService
                            .deleteTempInvite(this.temp_auth.id)
                            .subscribe(
                              (deleteTempInviteResult: any) => {
                                this.cookieService.set(
                                  "auth-token",
                                  loginUserResult.token
                                );
                                localStorage.removeItem("temp_auth");
                                hideNewUserModal();
                                this.router.navigate(["profile"]);
                              },
                              (error) => {
                                console.log(error);
                              }
                            );
                        },
                        (error) => {
                          console.log(error);
                        }
                      );
                    },
                    (error) => {
                      console.log(error);
                    }
                  );
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buttonLoader() {
    $("#continueBtn").click(function () {
      $("#continueBtn")
        .html(
          'Continue <span class="spinner-border spinner-border-sm mr-2" style="padding-left=10px" role="status" aria-hidden="true"></span>'
        )
        .addClass("disabled");
    });
  }
}
