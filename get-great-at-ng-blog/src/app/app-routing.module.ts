import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './articles/about/about.component';
import { IndexComponent } from './articles/angularization/index/index.component';
import { NvmComponent } from './articles/angularization/nvm/nvm.component';
import { VsCodeComponent } from './articles/angularization/vs-code/vs-code.component';
import { VtddAngularComponent } from './articles/angularization/vtdd-angular/vtdd-angular.component';
import { ContactComponent } from './articles/contact/contact.component';
import { GetGreatComponent } from './articles/get-great/get-great.component';
import { HomeComponent } from './articles/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'angularization', component: IndexComponent },
  { path: 'angularization/nvm', component: NvmComponent },
  { path: 'angularization/vscode', component: VsCodeComponent },
  { path: 'angularization/vtdd', component: VtddAngularComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
