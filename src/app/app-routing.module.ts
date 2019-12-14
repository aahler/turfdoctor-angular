import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ServicesComponent } from '../components/services/services.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:filter', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
