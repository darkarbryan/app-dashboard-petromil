import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { GarantiasRoutingModule } from './garantias-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/modules/material/material.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    GarantiasRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class GarantiasModule { }
