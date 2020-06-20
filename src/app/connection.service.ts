import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { CookieService } from "ngx-cookie-service";

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
  providedIn: "root",
})
export class ConnectionService {
  baseUrl = "http://127.0.0.1:8000/";
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/connectico/image/upload";
  CLOUDINARY_URL_RAW = "https://api.cloudinary.com/v1_1/connectico/raw/upload";
  CLOUDINARY_UPLOAD_PRESET_USER = "v1zqrsgl";
  CLOUDINARY_UPLOAD_PRESET_ORG = "f8uypc6p";
  CLOUDINARY_UPLOAD_PRESET_WORKSPACE_FILE = "wrkh6b9a";
  CLOUDINARY_UPLOAD_PRESET_PROJECT_FILE = "kbwnpxp5";
  CLOUDINARY_UPLOAD_PRESET_TEAM_FILE = "czshyy3q";
  CLOUDINARY_UPLOAD_PRESET_TASK_ASSIGNED_FILE = "mo2wzluf";
  CLOUDINARY_UPLOAD_PRESET_TASK_SUBMITTED_FILE = "qzu2kplt";

  constructor(
    private httpClient: HttpClient,
    private cookieServie: CookieService
  ) {}

  getHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
    });
  }

  getUploadHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
  }

  getAuthHeaders() {
    const token = this.cookieServie.get("auth-token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    });
  }

  // uploadPhoto(photo_address) {
  //   var formData = new FormData();
  //   formData.append("file", photo_address);
  //   formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET_USER);
  //   return this.httpClient.post(this.CLOUDINARY_URL, formData);
  // }

  uploadWorkspaceFile(file) {
    if (file == "") {
      return of("null");
    } else {
      var formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        this.CLOUDINARY_UPLOAD_PRESET_WORKSPACE_FILE
      );
      return this.httpClient.post(this.CLOUDINARY_URL_RAW, formData);
    }
  }

  uploadProjectFile(file) {
    if (file == "") {
      return of("null");
    } else {
      var formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        this.CLOUDINARY_UPLOAD_PRESET_PROJECT_FILE
      );
      return this.httpClient.post(this.CLOUDINARY_URL_RAW, formData);
    }
  }

  uploadTeamFile(file) {
    if (file == "") {
      return of("null");
    } else {
      var formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET_TEAM_FILE);
      return this.httpClient.post(this.CLOUDINARY_URL_RAW, formData);
    }
  }

  uploadTaskFile(file) {
    if (file == "") {
      return of("null");
    } else {
      var formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        this.CLOUDINARY_UPLOAD_PRESET_TASK_ASSIGNED_FILE
      );
      return this.httpClient.post(this.CLOUDINARY_URL_RAW, formData);
    }
  }

  uploadSubmittedTaskFile(file) {
    if (file == "") {
      return of("null");
    } else {
      var formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        this.CLOUDINARY_UPLOAD_PRESET_TASK_SUBMITTED_FILE
      );
      return this.httpClient.post(this.CLOUDINARY_URL_RAW, formData);
    }
  }

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
        headers: this.getHeaders(),
      }
    );
  }

  registerOrganization(organizationData: Organization) {
    console.log(organizationData);
    const org = JSON.stringify(organizationData);
    return this.httpClient.post(`${this.baseUrl}register/organizations/`, org, {
      headers: this.getHeaders(),
    });
  }

  createWorkspace(workspaceData: object) {
    const workspace = JSON.stringify(workspaceData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/`,
      workspace,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createWorkspaceEvent(eventData: object) {
    const event = JSON.stringify(eventData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/events/workspace/`,
      event,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createProjectEvent(eventData: object) {
    const event = JSON.stringify(eventData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/events/project/`,
      event,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createTeamEvent(eventData: object) {
    const event = JSON.stringify(eventData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/events/team/`,
      event,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createProject(projectData: object) {
    const project = JSON.stringify(projectData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/projects/`,
      project,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createTeam(teamData: object) {
    const team = JSON.stringify(teamData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/teams/`,
      team,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createTask(taskData: object) {
    const task = JSON.stringify(taskData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/tasks/`,
      task,
      {
        headers: this.getHeaders(),
      }
    );
  }

  submitUpdatedTask(updatedTaskData: object, task_id) {
    const updatedTask = JSON.stringify(updatedTaskData);
    return this.httpClient.patch(
      `${this.baseUrl}register/organization/workspaces/tasks/${task_id}/`,
      updatedTask,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createWorkspacePost(postData: object) {
    const post = JSON.stringify(postData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/posts/`,
      post,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createProjectPost(postData: object) {
    const post = JSON.stringify(postData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/projects/posts/`,
      post,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createTeamPost(postData: object) {
    const post = JSON.stringify(postData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/teams/posts/`,
      post,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createWorkspaceComment(commentData: object) {
    const comment = JSON.stringify(commentData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspaces/comments/`,
      comment,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createProjectComment(commentData: object) {
    const comment = JSON.stringify(commentData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/projects/comments/`,
      comment,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createTeamComment(commentData: object) {
    const comment = JSON.stringify(commentData);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/teams/comments/`,
      comment,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getWorkspaceCommentByPID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/comments/${"p" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getProjectCommentByPID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/projects/comments/${"p" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTeamCommentByPID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/teams/comments/${"p" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getWorkspacePostsByWID(id: any) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/posts/${"w" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getProjectPostsByPID(id: any) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/projects/posts/${"po" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTeamPostsByTID(id: any) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/teams/posts/${"t" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  // get project by workspace id
  getProjectByWID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/projects/${"w" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTeamByPID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/teams/${"p" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTaskByTID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/tasks/${"tm" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTaskByAssignedBy(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/tasks/${"as" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTaskByCreatedBy(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/tasks/${"cr" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getEventByWID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/events/workspace/${"w" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getEventByPID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/events/project/${"p" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getEventByTID(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/events/team/${"t" + id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  //login user with the credentials provided
  loginUser(credentials: AuthCredentials) {
    const body = JSON.stringify(credentials);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {
      headers: this.getAuthHeaders(),
    });
  }

  firstLogin(credentials: FirstAuthCredentials) {
    const data = JSON.stringify(credentials);
    return this.httpClient.post(`${this.baseUrl}register/authenticate`, data, {
      headers: this.getHeaders(),
    });
  }

  getUser(username: string) {
    return this.httpClient.get(`${this.baseUrl}register/users/${username}/`, {
      headers: this.getHeaders(),
    });
  }

  getOrganization(id: string) {
    return this.httpClient.get(`${this.baseUrl}register/organizations/${id}/`, {
      headers: this.getHeaders(),
    });
  }

  // getWorkspace(id: string) {
  //   console.log("Get workspace");
  //   return this.httpClient.get(
  //     `${this.baseUrl}register/organization/workspaces/${id}/`,
  //     {
  //       headers: this.getHeaders()
  //     }
  //   );
  // }

  getTotalMembers(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/members/${org_id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTotalWorkspaces(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/${org_id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getUserWorkspaces(org_id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/users/workspaces/${org_id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTotalProjects(id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/users/projects/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }
  getTotalTeams(id: string) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/users/teams/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  sendMemberInvites(list) {
    const members = JSON.stringify(list);
    return this.httpClient.post(`${this.baseUrl}register/invite`, members, {
      headers: this.getHeaders(),
    });
  }

  deleteTempInvite(id) {
    return this.httpClient.delete(
      `${this.baseUrl}register/organization/invites/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  addMemberWorkspace(data) {
    const member_workspace = JSON.stringify(data);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/workspace/add/`,
      member_workspace,
      {
        headers: this.getHeaders(),
      }
    );
  }

  addMemberProject(data) {
    const member_project = JSON.stringify(data);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/project/add/`,
      member_project,
      {
        headers: this.getHeaders(),
      }
    );
  }

  addMemberTeam(data) {
    const member_team = JSON.stringify(data);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/team/add/`,
      member_team,
      {
        headers: this.getHeaders(),
      }
    );
  }

  membersOfWorkspace(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspace/add/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  WorkspaceMembersData(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/workspaces/members/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  ProjectMembersData(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/projects/members/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  leaveWorkspace(id) {
    return this.httpClient.delete(
      `${this.baseUrl}register/organization/workspace/add/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  leaveProject(id) {
    return this.httpClient.delete(
      `${this.baseUrl}register/organization/project/add/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  leaveTeam(id) {
    return this.httpClient.delete(
      `${this.baseUrl}register/organization/team/add/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getUserConversations(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/users/conversations/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createNewConversation(data) {
    const conversationData = JSON.stringify(data);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/users/conversations/`,
      conversationData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getUserMessages(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/users/messages/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  sendUserMessage(message) {
    const messageData = JSON.stringify(message);
    return this.httpClient.post(
      `${this.baseUrl}register/organization/users/messages/`,
      messageData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getLastUserMessage(id) {
    return this.httpClient.get(
      `${this.baseUrl}register/organization/users/messages/last/${id}/`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  //////////////////////////////////////////////////////////////////
  ///////////////////ORGANIZATION DATA FETCH////////////////////////
  //////////////////////////////////////////////////////////////////
}
