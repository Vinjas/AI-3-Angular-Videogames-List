import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* { path: 'details-game', component: FirstComponent },
  { path: 'contact', component: SecondComponent },
  { path: 'about-us', component: SecondComponent }, */
  { path: 'home', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
