import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private route:Router) { }
  userSignUp(user:SignUp){
    this.http.post(`http://localhost:3000/user`,user,{observe:'response'}).
    subscribe((res)=>{
      if(res){
        localStorage.setItem('user',JSON.stringify(res.body));
        this.route.navigate(['/']);
      }
    });
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/']);
    }
  }

}
