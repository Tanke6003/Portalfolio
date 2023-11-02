import { Component,Input,OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-progress-circle-bars',
  templateUrl: './progress-circle-bars.component.html',
  styleUrls: ['./progress-circle-bars.component.scss']
})
export class ProgressCircleBarsComponent implements OnInit {
  @Input() percentage:number = 0;
  counter:number = 0;
  @Input() title:string = "";
  @Input() color:string = "#0f0";
  constructor() { }
  ngOnInit() {
    this.numberCounter();
    console.log(this.range(1, 100));
  }

  numberCounter() {
    if (this.counter < this.percentage) {
      this.counter = Math.ceil(this.counter + 1);
      setTimeout(() => {
        this.numberCounter();
      }, this.percentage *1.2);
    }
  }
  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
}
