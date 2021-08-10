import { Component } from '@angular/core';
import { persona} from './model/persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  personaArray: persona[] = [
    {identificacion:1, nombre:"Alejo", apellido:"ospina", sexo:"Masculino", RH:"A-" },
    {identificacion:2, nombre:"Alexa", apellido:"ortega", sexo:"femenino", RH:"A+"},
    {identificacion:1, nombre:"rodrigo", apellido:"marquez", sexo:"Masculino", RH:"A-"}
  ];

  selectedpersona: persona = new persona();

  open(persona: persona){
    this.selectedpersona=persona;

  }

  eliminar(){
    this.personaArray = this.personaArray.filter(x => x != this.selectedpersona);
    this.selectedpersona=new persona;
  }
}
