import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityDetailComponent } from "./Components/activity-detail/activity-detail.component";

const routes: Routes = [
    
    { path: 'activity-detail', component: ActivityDetailComponent  },
    //{ path: '', component:  },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}