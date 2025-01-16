import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','She Hulk', 'Thor'];
  public deletdHero?:string;
  removeLastHero():void{
    this.deletdHero = this.heroNames.pop();
  }
}
