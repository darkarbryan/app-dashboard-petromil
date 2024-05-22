import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { CarteraRoutingModule } from './cartera-routing.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    CarteraRoutingModule
  ]
})
export class CarteraModule { }
