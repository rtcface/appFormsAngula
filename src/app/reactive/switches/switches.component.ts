import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  myForm: FormGroup = this.fb.group({
      genero:[ 'M', Validators.required ],
      notifications:[ true,Validators.required ],
      termsAndConditions: [ false, Validators.required ]
  });

  person = {
    genero:'F',
    notifications:true
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      ...this.person,
      termsAndConditions:true
    });

    // this.myForm.get("termsAndConditions")?.valueChanges.subscribe(terms => {
    //   console.log(terms);
    // }) 

    this.myForm.valueChanges.subscribe(({termsAndConditions, ...rest}) => {
      this.person=rest;  
      console.log(rest);
    })


  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.termsAndConditions;

    this.person = formValue;
  }

}
