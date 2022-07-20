import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './table/table.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [AppRoutingModule, BrowserModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
