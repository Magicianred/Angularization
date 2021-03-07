import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { DemoTextComponent } from './demo-text/demo-text.component';
import { LoFiComponent } from './lo-fi/lo-fi.component';
import { DocumentComponent } from './page/document/document.component';
import { HomeComponent } from './articles/home/home.component';
import { AboutComponent } from './articles/about/about.component';
import { IndexComponent } from './articles/angularization/index/index.component';
import { NvmComponent } from './articles/angularization/nvm/nvm.component';
import { VsCodeComponent } from './articles/angularization/vs-code/vs-code.component';
import { VtddAngularComponent } from './articles/angularization/vtdd-angular/vtdd-angular.component';
import { GetGreatComponent } from './articles/get-great/get-great.component';
import PageComponent from './page/page.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './articles/contact/contact.component';
import { RouterModule } from '@angular/router';
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
    DemoTextComponent,
    LoFiComponent,
    DocumentComponent,
    HomeComponent,
    AboutComponent,
    IndexComponent,
    NvmComponent,
    VsCodeComponent,
    VtddAngularComponent,
    GetGreatComponent,
    PageComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, RouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
