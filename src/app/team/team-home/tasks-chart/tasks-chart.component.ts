import { Component, OnInit, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: "app-tasks-chart",
  templateUrl: "./tasks-chart.component.html",
  styleUrls: ["./tasks-chart.component.css"],
})
export class TasksChartComponent implements OnInit {
  view: any[] = [800, 200];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ["#FFFFFF", "#FF3547", "#C7B42C", "#AAAAAA"],
  };

  single = [
    {
      name: "Assigned",
      value: 4,
    },
    {
      name: "Completed",
      value: 10,
    },
  ];

  constructor() {
    Object.assign(this, this.single);
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {}
}
