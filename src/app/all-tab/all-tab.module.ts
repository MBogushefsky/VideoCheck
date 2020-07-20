import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllTabPage } from './all-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AllTabPageRoutingModule } from './all-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AllTabPageRoutingModule
  ],
  declarations: [AllTabPage]
})
export class AllTabPageModule {}
