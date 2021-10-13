import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: [,[Validators.required,Validators.minLength(3)]],
    favorites: this.fb.array([
      ['fifa 21'],
      ['fifa 22']
    ]),

  });
  
  constructor( private fb: FormBuilder ) { }

  isNotFieldValid( field: string) {
    return this.myForm.controls.name.errors &&
    this.myForm.controls.name.touched 
  }

  addFavorite()
  {
    if(this.newFavorite.invalid){return;}

    //this.favoritesArr.push( new FormControl( this.newFavorite.value,Validators.required ) );
    this.favoritesArr.push( this.fb.control( this.newFavorite.value,Validators.required ) );
    this.newFavorite.reset();
  }

  save() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }

  newFavorite: FormControl = this.fb.control('',Validators.required)

  get favoritesArr(){
    return this.myForm.get('favorites') as FormArray;
  }

  delete( id: number){
    this.favoritesArr.removeAt(id);
  }
 
}
