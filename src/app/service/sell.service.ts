import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp } from '../dataType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellService {
  isLoginIn=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient ,private route:Router) { }
  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/seller',data).subscribe((result)=>{
      if(result){
        this.isLoginIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result));
        this.route.navigate(['seller-home']);
      }
    });
  }
  reloadSeller():void{
     if(localStorage.getItem('seller')){
      this.isLoginIn.next(true);
      this.route.navigate(['seller-home']);
    } 
  }
}
