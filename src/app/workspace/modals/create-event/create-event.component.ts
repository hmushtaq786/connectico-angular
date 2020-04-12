import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectionService } from "src/app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"],
})
export class CreateEventComponent implements OnInit {
  @Input() currentWorkspace;

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

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit() {}

  createEvent() {
    $("#eventCreateBtn")
      .html(
        '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>'
      )
      .addClass("disabled");

    var user = JSON.parse(localStorage.getItem("user"));

    this.event.e_name = this.eventForm.get("name").value;
    this.event.e_description = this.eventForm.get("description").value;
    this.event.e_location = this.eventForm.get("location").value;
    this.event.e_date = this.eventForm.get("date").value;
    this.event.e_time = this.eventForm.get("time").value;
    this.event.created_by = user.id;
    this.event.workspace_id = this.currentWorkspace.w_id;

    // console.log(this.event);
  }
}
