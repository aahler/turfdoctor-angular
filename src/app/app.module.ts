import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HomeComponent } from '../components/home/home.component';
import { ServicesComponent } from '../components/services/services.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './LowerCaseUrlSerializer';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PortfolioCardComponent } from 'src/components/home/portfolio-card/portfolio-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailFormComponent } from 'src/components/email-form/email-form.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { ServiceCardComponent } from 'src/components/services/service-card/service-card.component';
import { GalleryItemComponent } from 'src/components/portfolio/gallery-item/gallery-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationComponent } from 'src/components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    PageHeaderComponent,
    PortfolioCardComponent,
    EmailFormComponent,
    FooterComponent,
    ServiceCardComponent,
    GalleryItemComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
