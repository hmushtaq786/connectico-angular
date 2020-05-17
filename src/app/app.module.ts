import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";

// import { GoogleChartsModule } from "angular-google-charts";
import { HttpClientModule } from "@angular/common/http";

import { CookieService } from "ngx-cookie-service";

// Profile components
import { ProfileStructureComponent } from "./profile/structure/structure.component";
import { CoverComponent } from "./profile/cover/cover.component";
import { AvatarComponent } from "./profile/avatar/avatar.component";
import { SocialLinksComponent } from "./profile/social-links/social-links.component";
import { StatusBoxComponent } from "./profile/status-box/status-box.component";
import { DetailsStructureComponent } from "./profile/details/details-structure/details-structure.component";
import { DetailsAboutComponent } from "./profile/details/details-about/details-about.component";
import { DetailsOrganizationComponent } from "./profile/details/details-organization/details-organization.component";
import { DetailsSettingsComponent } from "./profile/details/details-settings/details-settings.component";

// Organization components
import { OrganizationStructureComponent } from "./organization/structure/structure.component";
import { OrganizationCoverComponent } from "./organization/cover/organization-cover/organization-cover.component";
import { OrganizationAvatarComponent } from "./organization/avatar/organization-avatar/organization-avatar.component";
import { OrganizationTilesComponent } from "./organization/tiles/organization-tiles/organization-tiles.component";
import { OrganizationDetailsStructureComponent } from "./organization/details/organization-details-structure/organization-details-structure.component";
import { OrganizationDetailsAboutComponent } from "./organization/details/organization-details-about/organization-details-about.component";
import { OrganizationDetailsCreatedbyComponent } from "./organization/details/organization-details-createdby/organization-details-createdby.component";
import { MembersModalStructureComponent } from "./organization/modals/members-modal/structure/members-modal-structure/members-modal-structure.component";
import { WorkspacesModalStructureComponent } from "./organization/modals/workspaces-modal/structure/workspaces-modal-structure/workspaces-modal-structure.component";
import { ProjectsModalStructureComponent } from "./organization/modals/projects-modal/structure/projects-modal-structure/projects-modal-structure.component";
import { TeamsModalStructureComponent } from "./organization/modals/teams-modal/structure/teams-modal-structure/teams-modal-structure.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LandingPageModalsComponent } from "./landing-page/landing-page-modals/landing-page-modals.component";
import { RegisterModalComponent } from "./landing-page/landing-page-modals/register-modal/register-modal.component";
import { LoginModalComponent } from "./landing-page/landing-page-modals/login-modal/login-modal.component";
import { AppRoutingModule } from "./app-routing.module";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { FeedComponent } from "./workspace/feed/feed.component";
import { WorkspaceHomeComponent } from "./workspace/workspace-home/workspace-home.component";
import { WorkspaceProjectComponent } from "./workspace/workspace-project/workspace-project.component";
import { ConnectionService } from "./connection.service";
import { WorkspaceFilesComponent } from "./workspace/workspace-files/workspace-files.component";
import { ProjectComponent } from "./project/project.component";
import { MessagesComponent } from "./messages/messages.component";
import { WorkspaceEventComponent } from "./workspace/workspace-event/workspace-event.component";
import { CreateProjectComponent } from "./workspace/modals/create-project/create-project.component";
import { CreateEventComponent } from "./workspace/modals/create-event/create-event.component";
import { ShowMembersComponent } from "./workspace/modals/show-members/show-members.component";
import { ShowCompletedProjectsComponent } from "./workspace/modals/show-completed-projects/show-completed-projects.component";
import { ShowRemainingProjectsComponent } from "./workspace/modals/show-remaining-projects/show-remaining-projects.component";
import { ShowTeamsComponent } from "./workspace/modals/show-teams/show-teams.component";
import { LeaveWorkspaceComponent } from "./workspace/modals/leave-workspace/leave-workspace.component";
import { AddMembersComponent } from "./workspace/modals/add-members/add-members.component";
import { MessageDetailComponent } from "./messages/message-detail/message-detail.component";
import { ProjectHomeComponent } from "./project/project-home/project-home.component";
import { ProjectFilesComponent } from "./project/project-files/project-files.component";

import { OrganizationActionsComponent } from "./organization/organization-actions/organization-actions.component";
import { CreateWorkspaceComponent } from "./organization/organization-actions/create-workspace/create-workspace.component";
import { AddOrganizationMembersComponent } from "./organization/organization-actions/add-organization-members/add-organization-members.component";
import { ProjectEventComponent } from "./project/project-event/project-event.component";
import { ProjectTeamComponent } from "./project/project-team/project-team.component";
import { ProjectFeedComponent } from "./project/project-feed/project-feed.component";
import { TeamComponent } from "./team/team.component";
import { TeamTaskComponent } from "./team/team-task/team-task.component";
import { TeamHomeComponent } from "./team/team-home/team-home.component";
import { TeamFilesComponent } from "./team/team-files/team-files.component";
import { TeamFeedComponent } from "./team/team-feed/team-feed.component";
import { TeamEventComponent } from "./team/team-event/team-event.component";
import { AddTeamMembersComponent } from "./team/modals/add-team-members/add-team-members.component";
import { ShowTeamMembersComponent } from "./team/modals/show-team-members/show-team-members.component";
import { CreateTeamEventComponent } from "./team/modals/create-team-event/create-team-event.component";
import { CreateTaskComponent } from "./team/modals/create-task/create-task.component";
import { LeaveTeamComponent } from "./team/modals/leave-team/leave-team.component";
import { ShowCompletedTasksComponent } from "./team/modals/show-completed-tasks/show-completed-tasks.component";
import { ShowRemainingTasksComponent } from "./team/modals/show-remaining-tasks/show-remaining-tasks.component";
import { ErrorModalComponent } from "./error-modal/error-modal.component";
import { NewUserModalComponent } from "./landing-page/landing-page-modals/new-user-modal/new-user-modal.component";
import { OrganizationDetailsLocationComponent } from './organization/details/organization-details-location/organization-details-location.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { CreateTeamComponent } from './project/modals/create-team/create-team.component';
import { CreateProjectEventComponent } from './project/modals/create-project-event/create-project-event.component';
import { AddProjectMembersComponent } from './project/modals/add-project-members/add-project-members.component';
import { ShowProjectMembersComponent } from './project/modals/show-project-members/show-project-members.component';
import { LeaveProjectComponent } from './project/modals/leave-project/leave-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // profile components
    ProfileStructureComponent,
    CoverComponent,
    AvatarComponent,
    SocialLinksComponent,
    StatusBoxComponent,
    DetailsStructureComponent,
    DetailsAboutComponent,
    DetailsOrganizationComponent,
    DetailsSettingsComponent,
    // organization components
    OrganizationStructureComponent,
    OrganizationCoverComponent,
    OrganizationAvatarComponent,
    OrganizationTilesComponent,
    OrganizationDetailsStructureComponent,
    OrganizationDetailsAboutComponent,
    OrganizationDetailsCreatedbyComponent,
    MembersModalStructureComponent,
    WorkspacesModalStructureComponent,
    ProjectsModalStructureComponent,
    TeamsModalStructureComponent,
    LandingPageComponent,
    LandingPageModalsComponent,
    RegisterModalComponent,
    LoginModalComponent,
    WorkspaceComponent,
    FeedComponent,
    WorkspaceHomeComponent,
    WorkspaceProjectComponent,
    WorkspaceFilesComponent,
    ProjectComponent,
    MessagesComponent,
    WorkspaceEventComponent,
    CreateProjectComponent,
    CreateEventComponent,
    ShowMembersComponent,
    ShowCompletedProjectsComponent,
    ShowRemainingProjectsComponent,
    ShowTeamsComponent,
    LeaveWorkspaceComponent,
    AddMembersComponent,
    MessageDetailComponent,
    ProjectHomeComponent,
    ProjectFilesComponent,
    OrganizationActionsComponent,
    CreateWorkspaceComponent,
    AddOrganizationMembersComponent,
    ProjectEventComponent,
    ProjectTeamComponent,
    ProjectFeedComponent,
    TeamComponent,
    TeamTaskComponent,
    TeamHomeComponent,
    TeamFilesComponent,
    TeamFeedComponent,
    TeamEventComponent,
    AddTeamMembersComponent,
    ShowTeamMembersComponent,
    CreateTeamEventComponent,
    CreateTaskComponent,
    LeaveTeamComponent,
    ShowCompletedTasksComponent,
    ShowRemainingTasksComponent,
    ErrorModalComponent,
    NewUserModalComponent,
    OrganizationDetailsLocationComponent,
    NotFoundErrorComponent,
    CreateTeamComponent,
    CreateProjectEventComponent,
    AddProjectMembersComponent,
    ShowProjectMembersComponent,
    LeaveProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
    // GoogleChartsModule
  ],
  providers: [ConnectionService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
