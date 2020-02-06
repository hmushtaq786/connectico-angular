import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { OrganizationStructureComponent } from "./organization/structure/structure.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProfileStructureComponent } from "./profile/structure/structure.component";
import { WorkspaceComponent } from "./workspace/workspace.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "profile", component: ProfileStructureComponent },
  { path: "organization", component: OrganizationStructureComponent },
  { path: "workspace", component: WorkspaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
