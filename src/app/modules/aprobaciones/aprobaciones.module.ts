import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { AprobacionesRoutingModule } from './aprobaciones-routing.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    AprobacionesRoutingModule
  ]
})
export class AprobacionesModule { }
