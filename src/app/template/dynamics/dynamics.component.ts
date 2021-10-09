import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Person {
  name: string;
  favorites: Favorito[];
}

interface Favorito {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})


export class DynamicsComponent {

  @ViewChild('myForm') myForm!: NgForm;

  person: Person = {
    name: 'John',
    favorites: [
      { id: 1, name: 'fifa 2021' },
      { id: 2, name: 'fifa 2020' },
      { id: 3, name: 'fifa 2019' },
      { id: 4, name: 'fifa 2018' },
      { id: 5, name: 'fifa 2017' }
    ]
  };
  

  save(): void{
    console.log(this.myForm);
    this.myForm.resetForm();
  }


  txtValidate(): boolean {
    return this.myForm?.controls.nameTxt?.invalid 
    && this.myForm?.controls.nameTxt?.touched
  }

  delete(index: number): void {
    console.log(this.person.favorites.splice(index, 1)); 
  }

}
