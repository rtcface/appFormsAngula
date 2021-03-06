import { Component } from '@angular/core';

interface MenuItem{
  text: string;
  route: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    ` li {
      cursor: pointer;
    } 
     button {
      cursor: pointer;
    } `
  ]
})
export class SidemenuComponent {

  templateMenu:MenuItem[] = [
    { 
      text: "Basicos",
      route: "./template/basics"
    },
    { 
      text: "Dinamicos",
      route: "./template/dynamics"
    },
    { 
      text: "Switches",
      route: "./template/switches"
    },
  ]

  reactiveMenu:MenuItem[] = [
    { 
      text: "Basicos",
      route: "./reactive/basics"
    },
    { 
      text: "Dinamicos",
      route: "./reactive/dynamics"
    },
    { 
      text: "Switches",
      route: "./reactive/switches"
    },
  ]

  validacionesMenu:MenuItem[] = [
    { 
      text: "Login",
      route: "./auth/login"
    },
    { 
      text: "Register",
      route: "./auth/register"
    }
  ]

}
