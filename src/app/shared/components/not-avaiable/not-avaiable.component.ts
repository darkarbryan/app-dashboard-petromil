import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-avaiable',
  templateUrl: './not-avaiable.component.html',
  styleUrls: ['./not-avaiable.component.scss']
})
export class NotAvaiableComponent {

  ngOnInit():void{

  }

  @Input() nameModule: string = "";
  @Input() nameComponent: string = "";

}
