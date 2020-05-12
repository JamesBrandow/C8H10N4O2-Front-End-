import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { promise } from 'protractor';
import{Client} from 'src/app/models/client'

@Injectable({
  providedIn: 'root'  
})
export class ClientserviceService {

  constructor(private http:HttpClient) { }

  userObject:any;

  // getClient(username:string):Promise<Client> {
  //   let cPromise:Promise<Client> = this.http.get<Client>(`http://localhost:9000/client?username=${username}`).toPromise();
  //   return cPromise;
  // }
  

  authClient(username:string,password:string):Promise<any>{
    let clientpromise:Promise<any> = this.http.get(`http://localhost:9000/query/clients?username=${username}&password=${password}`).toPromise();
    // console.log(clientpromise)
    
    return clientpromise;

  }

  registerClient(username:string,password:string,email:string,fname:string,lname:string,phone:string):Promise<any>{
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
