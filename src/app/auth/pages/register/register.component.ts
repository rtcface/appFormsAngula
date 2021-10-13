import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // TODO: move other components into

nameLastName: string='([a-zA-Z]+) ([a-zA-Z]+)';


  myForm: FormGroup = this.fb.group({
    name: [,[Validators.required,Validators.pattern(this.nameLastName)] ],
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }


  isNotFieldValid( field: string ){
    return this.myForm.get(field)?.invalid 
    && this.myForm.get(field)?.touched; 
  }

}
