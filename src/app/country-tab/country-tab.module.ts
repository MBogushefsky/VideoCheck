import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryTabPage } from './country-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CountryTabPageRoutingModule } from './country-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CountryTabPageRoutingModule
  ],
  declarations: [CountryTabPage]
})
export class CountryTabPageModule {}
