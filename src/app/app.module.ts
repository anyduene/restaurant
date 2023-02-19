import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './containers/menu/menu.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FoodlistComponent } from './shared/foodlist/foodlist.component';
import { CategoriesComponent } from './containers/menu/categories/categories.component';
import { MainComponent } from './containers/main/main.component';
import { CategoryViewComponent } from './containers/category-view/category-view.component';
import { DishDetailComponent } from './containers/dish-detail-view/dish-detail/dish-detail.component';
import { DishDetailViewComponent } from './containers/dish-detail-view/dish-detail-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodblockComponent } from './shared/foodblock/foodblock.component';
import { FilterComponent } from './shared/filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavMenuComponent,
    FooterComponent,
    FoodlistComponent,
    CategoriesComponent,
    MainComponent,
    CategoryViewComponent,
    DishDetailComponent,
    DishDetailViewComponent,
    FoodblockComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
