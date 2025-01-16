import { Component } from "@angular/core";
@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <!-- <button (click)="increaseBy('+')">+1</button>
    <button (click)="increaseBy('-')">-1</button> -->
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent {
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
