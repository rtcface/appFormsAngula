import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // myForm:FormGroup = new FormGroup(
  //   {
  //     'name': new FormControl('Primer game')
  //   }
  // );

  myForm: FormGroup = this.fb.group({
    name: [,[Validators.required,Validators.minLength(3)]],
    price: [, [Validators.required,Validators.min(0)]],
    stock: [, [Validators.required,Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      name:'Initial',
      price: 10,
      stock:5
    });
  }

  isNotFieldValid( field: string ) {
    return this.myForm.controls[field].errors 
           && this.myForm.controls[field].touched;
  }

  save(){

      if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
      }

    console.log(this.myForm.value);
    this.myForm.reset();
  }


}
