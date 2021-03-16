import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetListComponent } from './vet-list/vet-list.component';
import { VeteranIncidentComponent } from './veteran-incident/veteran-incident.component';
import { VeteranMedComponent } from './Vet-med/veteran-med/veteran-med.component';

const routes: Routes = [
{
  path: '',
  component: VetListComponent
},

{
  path: 'Vet-med/:veteran',
  component: VeteranMedComponent
},

{
  path: ':veteran',
  component: VeteranIncidentComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeteransRoutingModule { }
