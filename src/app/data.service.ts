import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private messageSource = new BehaviorSubject("<System message>");
  currentMessage = this.messageSource.asObservable();

  private otherUserSubject = new BehaviorSubject({});
  otherUser = this.otherUserSubject.asObservable();

  private currentHistorySubject = new BehaviorSubject({});
  currentHistory = this.currentHistorySubject.asObservable();

  private conversationIDSubject = new BehaviorSubject(0);
  currentConversationID = this.conversationIDSubject.asObservable();

  private workspaceSubject = new BehaviorSubject(0);
  currentWorkspace = this.workspaceSubject.asObservable();

  private projectSubject = new BehaviorSubject(0);
  currentProject = this.projectSubject.asObservable();

  private teamSubject = new BehaviorSubject(0);
  currentTeam = this.teamSubject.asObservable();

  private inProgressTeamSubject = new BehaviorSubject(0);
  currentinProgressTeam = this.inProgressTeamSubject.asObservable();

  constructor() {}

  changeCurrentInProgressTeam(team) {
    this.inProgressTeamSubject.next(team);
  }

  changeCurrentWorkspace(workspace) {
    this.workspaceSubject.next(workspace);
  }

  changeCurrentProject(project) {
    this.projectSubject.next(project);
  }

  changeCurrentTeam(team) {
    this.teamSubject.next(team);
  }

  changeErrorModalMessage(message: string) {
    this.messageSource.next(message);
  }

  currentConversationWith(setOtherUser: object) {
    this.otherUserSubject.next(setOtherUser);
  }

  changeCurrentHistory(conversation: object) {
    this.currentHistorySubject.next(conversation);
  }

  changeConversationID(id) {
    this.conversationIDSubject.next(id);
  }
}
