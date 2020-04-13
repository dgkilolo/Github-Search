import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SearchFormComponent } from '../search-form/search-form.component';


const routes: Routes = [
  {path: "landing", component: LandingPageComponent},
  {path: "search", component: SearchFormComponent},
  {path: "", redirectTo:"/landing", pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
