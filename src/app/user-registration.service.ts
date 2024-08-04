import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: any): Observable<any>{
    return this.http.post("http://localhost:10001/springangular/users/register", user,{responseType:'text' as 'json'})
  }
  public getUsers(){
    return this.http.get("http://localhost:10001/springangular/users/getAllUsers");
  }
  public getUserByEmail(email: any){
    return this.http.get("http://localhost:10001/springangular/users/findUser/"+email);
  }
  public deleteUser(id: any){
    let headerData = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
    let allParams = {id:id};
    return this.http.get("http://localhost:10001/springangular/users/cancel/"+ id);
  }
}
