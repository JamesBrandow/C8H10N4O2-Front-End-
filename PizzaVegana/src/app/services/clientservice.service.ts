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

registerClient(username:string,password:string,email:string,fname:string,lname:string,phone:string):Promise<any>{
    let nuclientpromise:Promise<any> = this.http.post(`http://localhost:9000/clients`, {"clientId":0,  "firstName":`${fname}`,"lastName":`${lname}`, "email":`${email}`, "phone":`${phone}`,"username":`${username}`,"password":`${password}`}).toPromise();
    console.log(nuclientpromise)
    return nuclientpromise
  }

  authGuest(gusername:string,gpassword:string):Promise<any>{
    let clientpromise:Promise<any> = this.http.get(`http://localhost:9000/query/clients?username=${gusername}&password=${gpassword}`).toPromise();
    // console.log(clientpromise)
    
    return clientpromise;

  }

  updateClient(username:string,password:string,email:string,fname:string,lname:string,phone:string):Promise<any>{
    let upclientpromise:Promise<any> = this.http.put(`http://localhost:9000/updateclient`, {"clientId":this.userObject.clientId,  "firstName":`${fname}`,"lastName":`${lname}`, "email":`${email}`, "phone":`${phone}`,"username":`${username}`,"password":`${password}`}).toPromise();
    console.log(upclientpromise)
    return upclientpromise
  }

  

  

}
