import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillCardsComponent } from './skill-cards/skill-cards.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { CtaBlockComponent } from './cta-block/cta-block.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgressSkillComponent } from './progress-skill/progress-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutMeComponent,
    SkillCardsComponent,
    IntroBlockComponent,
    CtaBlockComponent,
    AboutUsComponent,
    ProgressSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
