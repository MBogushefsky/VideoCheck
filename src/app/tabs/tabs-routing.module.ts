import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'data',
    component: TabsPage,
    children: [
      {
        path: 'all',
        loadChildren: () => import('../all-tab/all-tab.module').then(m => m.AllTabPageModule)
      },
      {
        path: 'country',
        loadChildren: () => import('../country-tab/country-tab.module').then(m => m.CountryTabPageModule)
      },
      {
        path: 'us-state',
        loadChildren: () => import('../us-state-tab/us-state-tab.module').then(m => m.USStateTabPageModule)
      },
      {
        path: '',
        redirectTo: '/data/all',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/data/all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
