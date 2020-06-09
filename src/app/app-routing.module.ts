import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { OrganizationStructureComponent } from "./organization/structure/structure.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProfileStructureComponent } from "./profile/structure/structure.component";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { WorkspaceHomeComponent } from "./workspace/workspace-home/workspace-home.component";
import { FeedComponent } from "./workspace/feed/feed.component";
import { ProjectComponent } from "./project/project.component";
import { MessagesComponent } from "./messages/messages.component";
import { TeamComponent } from "./team/team.component";
import { NotFoundErrorComponent } from "./not-found-error/not-found-error.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "profile", component: ProfileStructureComponent },
  { path: "organization", component: OrganizationStructureComponent },
  {
    path: "workspace/:id",
    component: WorkspaceComponent,
    // children: [
    //   { path: "", component: WorkspaceHomeComponent },
    //   { path: "feed", component: FeedComponent },
    // ],
  },
  { path: "project/:id", component: ProjectComponent },
  { path: "messages", component: MessagesComponent },
  { path: "team/:id", component: TeamComponent },

  { path: "**", component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
