import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'  
})
export class ClientserviceService {

  constructor(private http:HttpClient) { }

  userObject:any;
  

  authClient(username:string,password:string):Promise<any>{
    let clientpromise:Promise<any> = this.http.get(`http://localhost:9000/query/clients?username=${username}&password=${password}`).toPromise();
    // console.log(clientpromise)
    
    return clientpromise;

  }

  registerClient(username:string,password:string,email:string,phone:string,fname:string,lname:string):Promise<any>{
    let nuclientpromise:Promise<any> = this.http.post(`http://localhost:9000/clients`, {"clientId":0, "email":`${email}`,"firstName":`${fname}`,"lastName":`${lname}`, "password":`${password}`, "phone":`${phone}`, "username":`${username}`}).toPromise();
    console.log(nuclientpromise)
    return nuclientpromise
  }

  authGuest(gusername:string,gpassword:string):Promise<any>{
    let clientpromise:Promise<any> = this.http.get(`http://localhost:9000/query/clients?username=${gusername}&password=${gpassword}`).toPromise();
    // console.log(clientpromise)
    
    return clientpromise;

  }

  

  

}
