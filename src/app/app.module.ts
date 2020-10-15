import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AccountsService , LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
