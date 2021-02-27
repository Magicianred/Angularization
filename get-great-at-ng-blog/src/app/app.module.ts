import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavBrandComponent } from './navbar/nav-brand/nav-brand.component';
import { PxFooterComponent } from './px-footer/px-footer.component';
import { FontSizeComponent } from './px-footer/font-size/font-size.component';
import { QualityComponent } from './px-footer/quality/quality.component';
import { ThemeComponent } from './px-footer/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavBrandComponent,
    PxFooterComponent,
    FontSizeComponent,
    QualityComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
