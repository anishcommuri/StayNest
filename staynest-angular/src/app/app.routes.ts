import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FindPgComponent } from './components/find-pg/find-pg.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'find-pg', component: FindPgComponent },
  { path: 'book-now', component: BookNowComponent },
  { path: 'booking-confirmation', component: BookingConfirmationComponent },
  { path: 'payment-gateway', component: PaymentGatewayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}