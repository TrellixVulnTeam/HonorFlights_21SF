import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusbookComponent } from './busbook/busbook.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MedicalComponent } from './medical/medical.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'mission',
    component: MissionComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'busbook',
    component: BusbookComponent
  },

  {
    path: 'medical',
    component: MedicalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
