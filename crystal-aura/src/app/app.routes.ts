import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
},
{
    path: 'custom-order',
    loadComponent: () => import('./features/custom-order/custom-order-submission/custom-order-submission.component').then(m => m.CustomOrderSubmissionComponent)
},
{
    path: 'collections',
    loadComponent: () => import('./features/collections-list/collections-list.component').then(m => m.CollectionsListComponent)
},
{
    path: 'product-detail',
    loadComponent: () => import('./features/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
},
{
    path: 'order-history',
    loadComponent: () => import('./features/user/order-history/order-history.component').then(m => m.OrderHistoryComponent)
}];
