import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  sellerName:string='';
  /**
   *
   */
  constructor(private route:Router) {
    
    
  }
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
        
          let details=localStorage.getItem('seller');
          let data=details && JSON.parse(details);
          this.sellerName=data.name; 
          this.menuType="seller";
          
        }else{

          console.log("outside seller");
          this.menuType="default";

        }
      }
    });
  }

  logOut(){
    localStorage.removeItem('seller');
    console.log('logout');
    this.route.navigate(['/']);
  }

}
