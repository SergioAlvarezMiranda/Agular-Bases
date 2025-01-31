import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:String = 'Hola mundo';
  public counter: number = 10;
  public res: string = '';

  // increaseBy(incre:'+'|'-'): void {
  //   if(incre == '+'){
  //     this.counter +=1;
  //   }else {
  //     this.counter -=1;
  //   }
  //   if(this.counter ==-1){
  //     this.counter =0;
  //   }
  // }

  increaseBy(value:number): void {
    this.counter += value;
  }

  // resetBy(value:''):void{
  //   if(value === ''){
  //     this.counter = 10;
  //   }
  // }

  resetCounter(){
    this.counter = 10;
  }
}
