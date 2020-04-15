import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private messageSource = new BehaviorSubject("<System message>");
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeErrorModalMessage(message: string) {
    this.messageSource.next(message);
  }
}