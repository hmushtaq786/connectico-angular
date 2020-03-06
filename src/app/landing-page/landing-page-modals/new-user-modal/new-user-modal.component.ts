import { Component, OnInit } from "@angular/core";
import $ from "jquery";
import { DataLoader } from "@amcharts/amcharts4/core";

@Component({
  selector: "app-new-user-modal",
  templateUrl: "./new-user-modal.component.html",
  styleUrls: ["./new-user-modal.component.css"]
})
export class NewUserModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.buttonLoader();
  }

  buttonLoader() {
    $("#continueBtn").click(function() {
      $("#continueBtn")
        .html(
          'Continue <span class="spinner-border spinner-border-sm mr-2" style="padding-left=10px" role="status" aria-hidden="true"></span>'
        )
        .addClass("disabled");
    });
  }
}
