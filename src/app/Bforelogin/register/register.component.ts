import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private miembroService: MiembrosService,private  utilidades: Utilidades) { }

  ngOnInit(): void {
        
  }

  registraNuevoUsuario (data: any){
    let res = this.utilidades.compruebaFormulario(data);
    if (!res.ok) alert (res.msg);
    //TODO: Añadir el checkbox para poder decidir si es un director o no. (solo los directores,q llevan D en el token pueden verlo)
    if (!data.director)  data.director = 0;
    data.id_banda = null ;

    this.miembroService.addMiembros(data.nif,data.nombre, data.apellido1, data.apellido2,data.instrumento, data.telefono,
       data.director,data.pin)
    .subscribe(res =>{
      return alert(res.data);
    });
  }

}
