import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { CookieService } from "ngx-cookie-service";
import { AxisItemLocation } from "@amcharts/amcharts4/.internal/charts/axes/Axis";
import Axios from "axios";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

interface User {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  status_line: string;
  email: string;
  phone_number: string;
  photo_address: string;
}

interface Organization {
  name: string;
  website: string;
  address: string;
  description: string;
  phone_number: string;
  photo_address: string;
}

interface AuthCredentials {
  username: string;
  password: string;
}

interface FirstAuthCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root"
})
export class ConnectionService {
  baseUrl = "http://127.0.0.1:8000/";
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/connectico/image/upload";
  CLOUDINARY_UPLOAD_PRESET_USER = "v1zqrsgl";
  CLOUDINARY_UPLOAD_PRESET_ORG = "f8uypc6p";

  constructor(
    private httpClient: HttpClient,
    private cookieServie: CookieService
  ) {}

  getHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  getUploadHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
  }

  getAuthHeaders() {
    const token = this.cookieServie.get("auth-token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    });
  }

  // uploadPhoto(photo_address) {
  //   var formData = new FormData();
  //   formData.append("file", photo_address);
  //   formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET_USER);
  //   return this.httpClient.post(this.CLOUDINARY_URL, formData);
  // }

  uploadUserPhoto(file) {
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET_USER);
    return this.httpClient.post(this.CLOUDINARY_URL, formData);
    // var formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET_USER);

    // return Axios({
    //   url: this.CLOUDINARY_URL,
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: formData
    // });
    // .then(function(res) {
    //   console.log(res);
    //   console.log(res.data.secure_url);
    //   userImageURL = res.data.secure_url;
    // })
    // .catch(function(err) {
    //   console.log(err);
    // });

    // console.log(userImageURL);
    // return userImageURL;
  }

  uploadOrganizationPhoto(file) {
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET_ORG);
    return this.httpClient.post(this.CLOUDINARY_URL, formData);
  }

  registerUser(userData: User) {
    var form_data = new FormData();

    for (var key in userData) {
      form_data.append(key, userData[key]);
    }
    console.log(userData);
    // const user = JSON.stringify(form_data);
    return this.httpClient.post(`${this.baseUrl}register/users/`, form_data);
  }

  updateUser(u_id, o_id) {
    const org_id = JSON.stringify(o_id);
    return this.httpClient.patch(
      `${this.baseUrl}register/users/${u_id}/`,
      org_id,
      {
        headers: this.getHeaders()
      }
    );
  }

  registerOrganization(organizationData: Organization) {
    console.log(organizationData);
    const org = JSON.stringify(organizationData);
    return this.httpClient.post(`${this.baseUrl}register/organizations/`, org, {
      headers: this.getHeaders()
    });
  }

  createWorkspace(workspaceData: object) {
    const workspace = JSON.stringify(workspaceData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/`,
      workspace,
      {
        headers: this.getHeaders()
      }
    );
  }

  //login user with the credentials provided
  loginUser(credentials: AuthCredentials) {
    const body = JSON.stringify(credentials);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {
      headers: this.getAuthHeaders()
    });
  }

  firstLogin(credentials: FirstAuthCredentials) {
    const data = JSON.stringify(credentials);
    return this.httpClient.post(`${this.baseUrl}register/authenticate`, data, {
      headers: this.getHeaders()
    });
  }

  getUser(username: string) {
    return this.httpClient.get(`${this.baseUrl}register/users/${username}/`, {
      headers: this.getHeaders()
    });
  }

  getOrganization(id: string) {
    return this.httpClient.get(`${this.baseUrl}register/organizations/${id}/`, {
      headers: this.getHeaders()
    });
  }

  getTotalMembers(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/members/${org_id}/`,
      {
        headers: this.getHeaders()
      }
    );
  }

  getTotalWorkspaces(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/members/${org_id}/`,
      {
        headers: this.getHeaders()
      }
    );
  }

  getTotalProjects(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/${org_id}/`,
      {
        headers: this.getHeaders()
      }
    );
  }
  getTotalTeams(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/${org_id}/`,
      {
        headers: this.getHeaders()
      }
    );
  }

  sendMemberInvites(list) {
    const members = JSON.stringify(list);
    return this.httpClient.post(`${this.baseUrl}register/invite`, members, {
      headers: this.getHeaders()
    });
  }

  deleteTempInvite(id) {
    return this.httpClient.delete(
      `${this.baseUrl}register/organization/invites/${id}/`,
      {
        headers: this.getHeaders()
      }
    );
  }
}
