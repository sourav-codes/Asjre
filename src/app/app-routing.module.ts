import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component'
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full'
},
{
  path: 'home',
  component: NavbarComponent
},
  {
    path: 'health',
    component: HealthinsuranceComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
