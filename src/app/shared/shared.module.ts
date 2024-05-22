import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAvaiableComponent } from './components/not-avaiable/not-avaiable.component';
import { MaterialModule } from './modules/material/material.module';



@NgModule({
  declarations: [
    NotAvaiableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NotAvaiableComponent
  ],
})
export class SharedModule { }
