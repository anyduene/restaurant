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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavMenuComponent,
    FooterComponent,
    FoodlistComponent,
    CategoriesComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
