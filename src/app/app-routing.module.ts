import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { OrganizationStructureComponent } from "./organization/structure/structure.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProfileStructureComponent } from "./profile/structure/structure.component";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { ProjectComponent } from "./project/project.component";
import { MessagesComponent } from "./messages/messages.component";
import { TeamComponent } from "./team/team.component";
import { NotFoundErrorComponent } from "./not-found-error/not-found-error.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "profile", component: ProfileStructureComponent },
  { path: "organization", component: OrganizationStructureComponent },
  { path: "workspace/:id", component: WorkspaceComponent },
  { path: "project/:id", component: ProjectComponent },
  { path: "messages", component: MessagesComponent },
  { path: "team", component: TeamComponent },

  { path: "**", component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
