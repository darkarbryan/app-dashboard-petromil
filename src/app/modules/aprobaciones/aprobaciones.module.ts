import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { AprobacionesRoutingModule } from './aprobaciones-routing.module';
import { MaterialModule } from '@shared/modules/material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    AprobacionesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AprobacionesModule { }
