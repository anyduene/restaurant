import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryViewComponent } from './containers/category-view/category-view.component';
import { MainComponent } from './containers/main/main.component';
import { MenuComponent } from './containers/menu/menu.component';
import { DishDetailViewComponent } from './containers/dish-detail-view/dish-detail-view.component';
import { CartViewComponent } from './containers/cart-view/cart-view.component';
import { ErrorComponent } from './shared/error/error.component';
import { NewsViewComponent } from './containers/news-view/news-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'news', component: NewsViewComponent },
  { path: 'menu/categories/:category', component: CategoryViewComponent },
  { path: 'menu/dishes/:dish', component: DishDetailViewComponent },
  { path: 'menu/categories/:category/dishes/:dish', component: DishDetailViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
