import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokesPageComponent} from './jokes-page/jokes-page.component';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'app', component: LandingPageComponent},
  {path: 'jokes', component: JokesPageComponent},
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
