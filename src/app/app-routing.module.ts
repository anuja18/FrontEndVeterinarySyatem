import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { TermsAndConditionsComponent } from './Components/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { AppointmentBookingComponent } from './Components/appointment-booking/appointment-booking.component';

const routes: Routes = [
{path: 'Home', component:HomeComponent},
{path: 'registeration',component:RegisterationComponent},
{path: 'login', component:LoginComponent},
{path: 'terms-and-conditions',component:TermsAndConditionsComponent},
{path:'about-us',component:AboutUsComponent},
{path: 'blog',component:BlogComponent},
{path:'doctor',component:DoctorComponent},
{path:'appointment-booking',component:AppointmentBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private route: ActivatedRoute){}
 }
