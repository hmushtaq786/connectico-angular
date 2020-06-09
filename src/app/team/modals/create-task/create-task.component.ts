import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.css"],
})
export class CreateTaskComponent implements OnInit {
  @Input() currentTeam;

  constructor() {}

  ngOnInit() {}
}
