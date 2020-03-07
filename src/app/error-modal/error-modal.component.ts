import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-error-modal",
  templateUrl: "./error-modal.component.html",
  styleUrls: ["./error-modal.component.css"]
})
export class ErrorModalComponent implements OnInit {
  @Input() message;

  constructor() {}

  ngOnInit() {}
}
