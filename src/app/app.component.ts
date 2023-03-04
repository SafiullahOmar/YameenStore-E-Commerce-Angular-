import { Component, OnInit } from '@angular/core';
import { SellService } from './service/sell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /**
   *
   */
  constructor(private seller:SellService) {
    
    
  }
  ngOnInit(): void {
  }
  title = 'YameenStore';
}
