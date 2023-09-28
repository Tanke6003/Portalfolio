import { Component } from '@angular/core';

@Component({
  selector: 'app-card-work',
  templateUrl: './card-work.component.html',
  styleUrls: ['./card-work.component.scss']
})
export class CardWorkComponent {
  title:string = 'Work';
  image:string = 'https://via.placeholder.com/600x300';
  alt:string = 'Placeholder';
  description:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc commodo tempor. Etiam et diam eget sapien tempus tincidunt. Nulla facilisi. Sed euismod, sapien eget aliquam tempus, diam ex aliquam justo, sed tincidunt justo sem eget nunc. Nulla facilisi. Integer nec augue quis sapien scelerisque aliquet. Nulla facilisi. Sed euismod, sapien eget aliquam tempus, diam ex aliquam justo, sed tincidunt justo sem eget nunc. Nulla facilisi.';
  pkItem:number = 1;

  constructor() { } 
}
