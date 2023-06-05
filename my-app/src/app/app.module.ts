import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppOverviewComponent } from './app-overview.component';
import { ChildComponent } from './app-child.component';
import { ParentComponent } from './app-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AppOverviewComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }