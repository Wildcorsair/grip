import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {HoverDirective} from './directives/hover.directive';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./pipes/search.pipe";
import {AboutComponent} from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
