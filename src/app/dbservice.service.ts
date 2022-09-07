import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http:HttpClient) { }
  postCompany(data:any){
    return this.http.post<any>("http://localhost:3000/CompanyList/",data)
  }
  getCompany(){
    return this.http.get<any>("http://localhost:3000/CompanyList/")
  }
}
