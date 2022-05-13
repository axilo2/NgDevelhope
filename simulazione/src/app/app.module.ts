import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityRequestComponent } from './Components/activity-request/activity-request.component';
import { ActivityListComponent } from './Components/activity-list/activity-list.component';
import { ActivityDetailComponent } from './Components/activity-detail/activity-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ActivityRequestComponent,
    ActivityListComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
