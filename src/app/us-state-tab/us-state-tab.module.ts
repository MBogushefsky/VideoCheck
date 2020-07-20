import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { USStateTabPage } from './us-state-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { USStateTabPageRoutingModule } from './us-state-tab-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: USStateTabPage }]),
    USStateTabPageRoutingModule,
  ],
  declarations: [USStateTabPage]
})
export class USStateTabPageModule {}
