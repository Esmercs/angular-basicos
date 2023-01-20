import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre  : string = 'IronMan';
    edad    : number = 45;

    get nombreCapitalizado() : string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre() :string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre() : void {
        this.nombre === 'Spiderman' ? this.nombre = 'IronMan' : this.nombre = 'Spiderman'
    }

    cambiarEdad() : void {
        this.edad === 30 ? this.edad = 45 : this.edad = 30
    }
}