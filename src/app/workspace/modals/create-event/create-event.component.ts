import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"],
})
export class CreateEventComponent implements OnInit {
  modalMessage = "<System message>";

  eventForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    location: new FormControl(),
    time: new FormControl(),
    date: new FormControl(),
  });

  event = {
    e_name: "",
    e_description: "",
    e_location: "",
    e_date: "",
    e_time: "",
    created_by: "",
    workspace_id: "",
  };

  constructor() {}

  ngOnInit() {}

  createEvent() {
    $("#eventCreateBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");
  }
}
