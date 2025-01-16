import { CounterComponent } from './counter/counter.component';
import { NgModule } from "@angular/core";


@NgModule({
  imports: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}
