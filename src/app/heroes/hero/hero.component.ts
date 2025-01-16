import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public title:string = 'ironman';
  //public Nombre:string = 'nombre'
  //public age:number|string = 'edad';
  public age:number = 45;
  get capitalizeName():string {
    return this.title.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.title} - ${this.age}`;
  }

  // cambiaTitle():void {
  //   if(this.title == 'Spiderman'){
  //     this.title= 'Ironman';
  //   }

  //   if(this.Nombre== 'nombre'){
  //     this.Nombre = 'Tony Star';
  //   }
  // }
  // cambiaAge():void{
  //   if(this.age== 'edad'){
  //     this.age= 25;
  //   }
  // }

  changeHero():void{
    this.title = 'Spiderman'
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.title = 'ironam';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
