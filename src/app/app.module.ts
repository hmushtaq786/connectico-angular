import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";

import { GoogleChartsModule } from "angular-google-charts";
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
import { WorkspaceEventComponent } from './workspace/workspace-event/workspace-event.component';
import { CreateProjectComponent } from './workspace/modals/create-project/create-project.component';
import { CreateEventComponent } from './workspace/modals/create-event/create-event.component';
import { CreatePostComponent } from './workspace/modals/create-post/create-post.component';

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
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [ConnectionService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
