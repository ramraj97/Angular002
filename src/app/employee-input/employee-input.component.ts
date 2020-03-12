import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent implements OnInit {

  QualificationArray: string[];
  ExperienceArray: string[];

  constructor(private http : HttpClient) { }
   
  
  employeeobject : object ={}

  postEmployee(emp:Employee)
  {
     
  this.employeeobject={ 
    "FirstName" : emp.FirstName ,
    "LastName" :  emp.LastName ,
    "Email" :  emp.Email,
    "Contact" :  emp.Contact,
    "Adress" :  emp.Adress,
    "UserName" :  emp.UserName,
    "Password" :  emp.Password,
    "Gender" :  emp.Gender,
    "Qualification" :  emp.Qualification,
    "Experience" :  emp.Experience
                        }
  this.http.post("http://localhost:4444/employees",this.employeeobject).subscribe((res:Response)=>{console.log(res);})
   
  }
 



  ngOnInit(): void {

    this.QualificationArray =["BE","BTECH","DIPLOMA","MTECH"];
    this.ExperienceArray=["0-1 YEAR","2-5 YEAR","5-8 YEAR","> 8YEAR"];

  }

}
