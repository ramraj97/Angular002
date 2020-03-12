import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
   
  url : string = "http://localhost:4444/employees";
  constructor(private http : HttpClient) { }
  getEmployee() : Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.url);
  }

  deleteEmployee(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)

  }
   
}
