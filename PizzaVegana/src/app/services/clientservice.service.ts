import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'  
})
export class ClientserviceService {

  constructor(private http:HttpClient) { }

  userObject:any;

  getClient(username:string,password:string):Promise<any>{
        let clientpromise:Promise<any> = this.http.get(`http://localhost:9000/query/clients?username=${username}&password=${password}`).toPromise();
        // console.log(clientpromise)
        return clientpromise;
  }

}
