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

  constructor() {}

  changeErrorModalMessage(message: string) {
    this.messageSource.next(message);
  }

  currentConversationWith(setOtherUser: object) {
    this.otherUserSubject.next(setOtherUser);
  }

  changeCurrentHistory(conversation: object) {
    this.currentHistorySubject.next(conversation);
  }
}
