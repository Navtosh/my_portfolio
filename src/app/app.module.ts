import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { ConnectComponent } from './connect/connect.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './common/menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ServicesComponent,
    ResumeComponent,
    TestimonialComponent,
    LatestUpdatesComponent,
    ConnectComponent,
    FooterComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
