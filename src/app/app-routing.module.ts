import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusbookComponent } from './busbook/busbook.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
  
  {
    path: 'veterans',
    loadChildren: () => import('./veterans/veterans.module').then(m => m.VeteransModule)
  },

  {
    path: 'mission',
    component: MissionComponent
  },

  {
    path: 'busbook',
    component: BusbookComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
