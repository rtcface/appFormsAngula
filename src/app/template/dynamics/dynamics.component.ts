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

  newGame: string="";

  person: Person = {
    name: 'John',
    favorites: [
     
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

  add( ): void {
    const newFavorite: Favorito = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    this.person.favorites.push({...newFavorite});

    this.newGame="";
  }
}
