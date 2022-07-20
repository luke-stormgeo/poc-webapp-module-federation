import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatButtonToggleModule,
    MatTooltipModule,
    ModuleFederationToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
