import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeteransRoutingModule } from './veterans-routing.module';
import { VeteranIncidentComponent } from './veteran-incident/veteran-incident.component';
import { VeteranMedComponent } from './Vet-med/veteran-med/veteran-med.component';
import { VetListComponent } from './vet-list/vet-list.component';


@NgModule({
  declarations: [
    VeteranIncidentComponent,
    VeteranMedComponent,
    VetListComponent
  ],
  imports: [
    CommonModule,
    VeteransRoutingModule
  ]
})
export class VeteransModule { }
