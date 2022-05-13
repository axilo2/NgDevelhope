import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityDetailComponent } from "./Components/activity-detail/activity-detail.component";
import { ActivityListComponent } from "./Components/activity-list/activity-list.component";
import { ActivityRequestComponent } from "./Components/activity-request/activity-request.component";

const routes: Routes = [
    
    { path: 'activity-detail', component: ActivityDetailComponent  },
    { path: 'activity-list', component: ActivityListComponent },
    { path: 'activity-request', component: ActivityRequestComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/activity-request', pathMatch: 'full' },
    { path: '**', redirectTo: '/activity-request', pathMatch: 'full' },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}