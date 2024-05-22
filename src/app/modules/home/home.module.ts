import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { HomeRoutingModule } from './home-routing.module';
import { NotAvaiableComponent } from '@shared/components/not-avaiable/not-avaiable.component';

@NgModule({
  declarations: [
    OverviewComponent,
    NotAvaiableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
