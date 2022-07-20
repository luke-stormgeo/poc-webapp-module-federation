import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { GraphComponent } from './graph/graph.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, GraphComponent],
  imports: [BrowserModule, MatButtonModule],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('graph-element', ce);
  }
}
