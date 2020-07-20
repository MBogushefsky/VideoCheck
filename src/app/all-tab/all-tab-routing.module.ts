import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTabPage } from './all-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AllTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTabPageRoutingModule {}
