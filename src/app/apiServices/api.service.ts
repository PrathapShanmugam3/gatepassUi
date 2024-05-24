import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../classes/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private http:HttpClient) { }

 private baseUrl=environment.apiUrl;

  post(url:string,data:any){

    console.log(url);
    

return this.http.post<any>(`${this.baseUrl}${url}`,data);

  }

  get(url:string){

    return this.http.get<any[]>(this.baseUrl+url);
  }

  getId(url:string){

    return this.http.get<any>(this.baseUrl+url);
  }

  update(url:string,data:any){

    return this.http.put(`${this.baseUrl}${url}`,data);
  }

  delete(url:string){
    return this.http.delete(`${this.baseUrl}${url}`)
  }




}
