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
import { BgImageComponent } from './bg-image/bg-image.component';
import { ThemeButtonComponent } from './px-footer/theme-button/theme-button.component';
import { ThemeChangeComponent } from './theme-change/theme-change.component';
import { DemoTextComponent } from './demo-text/demo-text.component';
import { LoFiComponent } from './lo-fi/lo-fi.component';
import { DocumentComponent } from './page/document/document.component';
import { HomeComponent } from './articles/home/home.component';
import { AboutComponent } from './articles/about/about.component';
import { IndexComponent } from './articles/angularization/index/index.component';
import { NvmComponent } from './articles/angularization/nvm/nvm.component';
import { VsCodeComponent } from './articles/angularization/vs-code/vs-code.component';
import { VtddAngularComponent } from './articles/angularization/vtdd-angular/vtdd-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavBrandComponent,
    PxFooterComponent,
    FontSizeComponent,
    QualityComponent,
    BgImageComponent,
    ThemeButtonComponent,
    ThemeChangeComponent,
    DemoTextComponent,
    LoFiComponent,
    DocumentComponent,
    HomeComponent,
    AboutComponent,
    IndexComponent,
    NvmComponent,
    VsCodeComponent,
    VtddAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
