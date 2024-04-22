import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'transactions',
        loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then(m => m.PhotosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/transactions',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/transactions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
