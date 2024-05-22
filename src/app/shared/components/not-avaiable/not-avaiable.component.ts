import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-avaiable',
  templateUrl: './not-avaiable.component.html',
  styleUrls: ['./not-avaiable.component.scss']
})
export class NotAvaiableComponent {

  constructor(private router: Router) {}

  ngOnInit():void{

  }

  @Input() nameModule: string = "";
  @Input() nameComponent: string = "";

  returnToHome():void{
    this.router.navigate(['/home']);
  }

}
