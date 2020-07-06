import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, RouteReuseStrategy } from "@angular/router";
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
import { MessageDetailComponent } from "./messages/message-detail/message-detail.component";
import { BlankComponent } from "./blank/blank.component";
import { NewMessageComponent } from "./messages/new-message/new-message.component";
import { TaskComponent } from "./task/task.component";
import { CreatedComponent } from "./task/created/created.component";
import { AssignedComponent } from "./task/assigned/assigned.component";
import { TeamHomeComponent } from "./team/team-home/team-home.component";
import { TeamFeedComponent } from "./team/team-feed/team-feed.component";
import { TeamTaskComponent } from "./team/team-task/team-task.component";
import { TeamEventComponent } from "./team/team-event/team-event.component";
import { TeamFilesComponent } from "./team/team-files/team-files.component";
import { TeamSettingsComponent } from "./team/team-settings/team-settings.component";
import { ProjectHomeComponent } from "./project/project-home/project-home.component";
import { ProjectFeedComponent } from "./project/project-feed/project-feed.component";
import { ProjectTeamComponent } from "./project/project-team/project-team.component";
import { ProjectEventComponent } from "./project/project-event/project-event.component";
import { ProjectFilesComponent } from "./project/project-files/project-files.component";
import { ProjectSettingsComponent } from "./project/project-settings/project-settings.component";
import { WorkspaceProjectComponent } from "./workspace/workspace-project/workspace-project.component";
import { WorkspaceEventComponent } from "./workspace/workspace-event/workspace-event.component";
import { WorkspaceFilesComponent } from "./workspace/workspace-files/workspace-files.component";
import { WorkspaceSettingsComponent } from "./workspace/workspace-settings/workspace-settings.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "profile", component: ProfileStructureComponent },
  { path: "organization", component: OrganizationStructureComponent },
  {
    path: "workspace/:id",
    component: WorkspaceComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      { path: "home", component: WorkspaceHomeComponent },
      { path: "feed", component: FeedComponent },
      { path: "projects", component: WorkspaceProjectComponent },
      { path: "events", component: WorkspaceEventComponent },
      { path: "files", component: WorkspaceFilesComponent },
      { path: "settings", component: WorkspaceSettingsComponent },
    ],
  },
  {
    path: "project/:id",
    component: ProjectComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      { path: "home", component: ProjectHomeComponent },
      { path: "feed", component: ProjectFeedComponent },
      { path: "teams", component: ProjectTeamComponent },
      { path: "events", component: ProjectEventComponent },
      { path: "files", component: ProjectFilesComponent },
      { path: "settings", component: ProjectSettingsComponent },
    ],
  },
  {
    path: "messages",
    component: MessagesComponent,
    children: [
      { path: "", component: BlankComponent, data: { animation: "Messages" } },
      {
        path: "new",
        component: NewMessageComponent,
        data: { animation: "NewMessages" },
      },
      {
        path: ":slug",
        component: MessageDetailComponent,
        data: { animation: "DetailedMessages" },
      },
    ],
  },
  {
    path: "team/:id",
    component: TeamComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      { path: "home", component: TeamHomeComponent },
      { path: "feed", component: TeamFeedComponent },
      { path: "tasks", component: TeamTaskComponent },
      { path: "events", component: TeamEventComponent },
      { path: "files", component: TeamFilesComponent },
      { path: "settings", component: TeamSettingsComponent },
    ],
  },
  {
    path: "task",
    component: TaskComponent,
    children: [
      { path: "", component: BlankComponent },
      {
        path: "created",
        component: CreatedComponent,
      },
      {
        path: "assigned",
        component: AssignedComponent,
      },
    ],
  },
  { path: "**", component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
