import { Component, OnInit } from '@angular/core';
import { SellService } from '../service/sell.service';
import {Router} from '@angular/router';
import { SignUp } from '../dataType';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  /**
   *
   */
  constructor(private seller:SellService,private route:Router) {
    
    
  }
  ngOnInit(): void {
      this.seller.reloadSeller();    
  }

  signUp(data: SignUp): void {
    
    this.seller.userSignUp(data);
  }

}
