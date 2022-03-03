import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:string='';
  terms: boolean=false;
  email:string='';
  password:string=''
  // phonenumber:;    
  addform(formvalue: NgForm): void{
    console.log(formvalue.value);
  }
  title = 'templateform';
}
