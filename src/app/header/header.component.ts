import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../dataType';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  sellerName:string='';
  searchResult:undefined|product[];
  /**
   *
   */
  constructor(private route:Router, private product:ProductService) {
    
    
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
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
       
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
  submitSearch(val:string){
    console.warn(val)
  this.route.navigate([`search/${val}`]);
  }
}
