import { Component } from '@angular/core';
import { product } from '../dataType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts:undefined|product[];
 trendyProducts:undefined | product[];

}
