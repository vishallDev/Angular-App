import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from '../../hero/hero.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { SkillCardsComponent } from '../../skill-cards/skill-cards.component';
import { IntroBlockComponent } from '../../intro-block/intro-block.component';
import { CtaBlockComponent } from '../../cta-block/cta-block.component';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { ProgressSkillComponent } from '../../progress-skill/progress-skill.component';
import { EducationComponent } from '../education/education.component';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroComponent,
    AboutMeComponent,
    SkillCardsComponent,
    IntroBlockComponent,
    CtaBlockComponent,
    NgxTypedJsModule
  ]
})
export class HomeModule { }
