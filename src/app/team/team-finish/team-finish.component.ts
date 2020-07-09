import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-team-finish",
  templateUrl: "./team-finish.component.html",
  styleUrls: ["./team-finish.component.css"],
})
export class TeamFinishComponent implements OnInit {
  @Input() currentTeam;

  submitTeamForm = new FormGroup({
    comment: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}

  submitTeam() {}

  userFileSelected = (event) => {
    // this.updatedTask.submitted_filepath = event.target.files[0];
  };
}
