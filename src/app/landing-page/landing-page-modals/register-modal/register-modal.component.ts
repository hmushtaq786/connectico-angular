import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ConeColumn } from "@amcharts/amcharts4/charts";

import { CookieService } from "ngx-cookie-service";

import { Router } from "@angular/router";

import {
  FileUploader,
  FileUploaderOptions,
  ParsedResponseHeaders
} from "ng2-file-upload";
import { Cloudinary } from "@cloudinary/angular-5.x";

import { ConnectionService } from "../../../connection.service";

declare const hideRegisterModal: any;
declare const stepper: any;

@Component({
  selector: "app-register-modal",
  templateUrl: "./register-modal.component.html",
  styleUrls: ["./register-modal.component.css"]
})
export class RegisterModalComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    status_line: new FormControl(),
    email: new FormControl(),
    phone_number: new FormControl(),
    photo_address: new FormControl(),

    org_name: new FormControl(),
    org_website: new FormControl(),
    org_address: new FormControl(),
    org_about: new FormControl(),
    org_phone: new FormControl(),
    org_photo: new FormControl()
  });

  user = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    status_line: "",
    email: "",
    phone_number: "",
    photo_address: ""
  };

  organization = {
    name: "",
    website: "",
    address: "",
    description: "",
    phone_number: "",
    photo_address: ""
  };

  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.buttonLoader();
    stepper();
  }

  userFileSelected = event => {
    this.user.photo_address = event.target.files[0];
    // this.connectionService.uploadPhoto(this.user.photo_address).subscribe(
    //   result => {
    //     console.log(result);
    //   },
    //   error => console.log(error)
    // );
  };

  orgFileSelected = event => {
    this.organization.photo_address = event.target.files[0];
  };

  register = () => {
    this.user.username = this.registerForm.get("username").value;
    this.user.password = this.registerForm.get("password").value;
    this.user.first_name = this.registerForm.get("first_name").value;
    this.user.last_name = this.registerForm.get("last_name").value;
    this.user.status_line = this.registerForm.get("status_line").value;
    this.user.email = this.registerForm.get("email").value;
    this.user.phone_number = this.registerForm.get("phone_number").value;

    this.organization.name = this.registerForm.get("org_name").value;
    this.organization.website = this.registerForm.get("org_website").value;
    this.organization.address = this.registerForm.get("org_address").value;
    this.organization.description = this.registerForm.get("org_about").value;
    this.organization.phone_number = this.registerForm.get("org_phone").value;

    this.connectionService.uploadUserPhoto(this.user.photo_address).subscribe(
      (userPhotoResult: any) => {
        this.user.photo_address = userPhotoResult.secure_url;
        this.connectionService
          .uploadOrganizationPhoto(this.organization.photo_address)
          .subscribe(
            (orgPhotoResult: any) => {
              this.organization.photo_address = orgPhotoResult.secure_url;
              this.connectionService.registerUser(this.user).subscribe(
                (userRegisterResult: any) => {
                  this.connectionService.getUser(this.user.username).subscribe(
                    (getUserRegister: any) => {
                      this.organization["created_by"] = getUserRegister.id;
                      this.connectionService
                        .registerOrganization(this.organization)
                        .subscribe(
                          (orgRegisterResult: any) => {
                            this.user["organization_id"] = orgRegisterResult.id;
                            var org_id = {
                              organization_id: orgRegisterResult.id,
                              org_creator: true
                            };
                            this.connectionService
                              .updateUser(getUserRegister.id, org_id)
                              .subscribe(
                                (updateUserResult: any) => {
                                  this.connectionService
                                    .getUser(this.user.username)
                                    .subscribe(
                                      (getUserResult: any) => {
                                        localStorage.setItem(
                                          "user",
                                          JSON.stringify(getUserResult)
                                        );
                                        localStorage.setItem(
                                          "org",
                                          JSON.stringify(orgRegisterResult)
                                        );
                                        var loginData = {
                                          username: getUserResult.username,
                                          password: this.user.password
                                        };
                                        this.connectionService
                                          .loginUser(loginData)
                                          .subscribe(
                                            (loginUserResult: any) => {
                                              this.cookieService.set(
                                                "auth-token",
                                                loginUserResult.token
                                              );
                                              hideRegisterModal();
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
  };

  buttonLoader() {
    $("#registerBtn").click(function() {
      $("#registerBtn").addClass("disabled");
      $("#loader").html(
        '<span class="spinner-border spinner-border-md mr-2" style="color:#FF3547; padding-left=10px" role="status" aria-hidden="true"></span>'
      );
    });
  }
}
