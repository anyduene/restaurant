import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryViewComponent } from './containers/category-view/category-view.component';
import { MainComponent } from './containers/main/main.component';
import { MenuComponent } from './containers/menu/menu.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:category', component: CategoryViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
