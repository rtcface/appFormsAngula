import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // TODO: move other components into

nameLastName: string='([a-zA-Z]+) ([a-zA-Z]+)';
emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  myForm: FormGroup = this.fb.group({
    name: [,[Validators.required,Validators.pattern(this.nameLastName)] ],
    email: [,[Validators.required,Validators.pattern(this.emailPattern)] ],
    username: [,[Validators.required,this.validUserName] ],
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name:'Ramiro Tepehua',
      email: 'test@test.org',
      username:'joeBlack'
    });
  }


  isNotFieldValid( field: string ){
    return this.myForm.get(field)?.invalid 
    && this.myForm.get(field)?.touched; 
  }

  save() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

  validUserName( control : FormControl ){
    const valor:string = control.value?.trim().toLowerCase();
    console.log(valor);

    if( valor === "rtcface")
        return{ rtcface:true };

    return null;
  }
}
