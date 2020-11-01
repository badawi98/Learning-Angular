import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.componet';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UsernameComponent } from './username/username.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CookpitComponent } from './cookpit/cookpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts-service';
import { LoggingService } from './logging.service';
import { HomeComponent } from './home/home.component';
import { RoutingServersComponent } from './router-servers/servers.component';
import { EditServerComponent } from './router-servers/edit-server/edit-server.component';
import { RoutingServerComponent } from './router-servers/server/server.component';
import { UsersComponent } from './router-users/users.component';
import { UserComponent } from './router-users/user/user.component';
import { ServersService } from './router-servers/servers.service';


const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'users' , component : UsersComponent},
  {path : 'users/:id/:name' , component : UserComponent},
  {path : 'servers' , component : RoutingServersComponent},
  {path : 'servers/:id/edit' , component : EditServerComponent},
  {path : 'servers/:id/' , component : RoutingServerComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    SuccessfulAlertComponent,
    WarningAlertComponent,
    UsernameComponent,
    DetailsComponent,
    CookpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    RoutingServersComponent,
    EditServerComponent,
    RoutingServerComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountsService , LoggingService , ServersService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
