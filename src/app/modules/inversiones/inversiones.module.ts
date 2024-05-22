import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { InversionesRoutingModule } from './inversiones-routing.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    InversionesRoutingModule
  ]
})
export class InversionesModule { }
