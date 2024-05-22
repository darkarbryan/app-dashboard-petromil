import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { HomeRoutingModule } from './home-routing.module';
import { NotAvaiableComponent } from '@shared/components/not-avaiable/not-avaiable.component';
import { MaterialModule } from '@shared/modules/material/material.module';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    OverviewComponent,
    NotAvaiableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
