import { DetailsGameComponent } from './details-game/details-game.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'game/:id', component: DetailsGameComponent },
  { path: 'my-account', component: MyaccountComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
