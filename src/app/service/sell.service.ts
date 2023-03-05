import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login, SignUp } from '../dataType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellService {
  isLoginIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);
  constructor(private http:HttpClient ,private route:Router) { }
  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/seller',data ,{observe:'response'}).subscribe((result)=>{
      if(result){
        this.isLoginIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body));
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

  userLogin(data:Login){
   return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).
    subscribe((result:any)=>{
      console.log(localStorage.getItem('seller'));
        if(result && result.body && result.body.length){
          localStorage.setItem('seller',JSON.stringify(result.body));
          this.route.navigate(['seller-home']);
        }else{
          this.isLoginError.emit(true);
        }
    });
  }
}
