import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { TermsAndConditionsComponent } from './Components/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { AppointmentBookingComponent } from './Components/appointment-booking/appointment-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterationComponent,
    LoginComponent,
    LogoutComponent,
    TermsAndConditionsComponent,
    AboutUsComponent,
    BlogComponent,
    DoctorComponent,
    AppointmentBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
