import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  
  QualificationArray: string[];
  ExperienceArray: string[];

  id : number;
  data :object={} ;
  employeeobject : object = {};
  employee=[];

  constructor( private route : ActivatedRoute ,private http : HttpClient) { }
   
  url : string ="http://localhost:4444/employees";

  updateEmployee(emp : Employee)
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
    };
    this.http.put(`${this.url}/${this.id}`,this.employeeobject).subscribe(
      () => {console.log("update")}
    );
  }

  ngOnInit(): void {

    this.QualificationArray =["BE","BTECH","DIPLOMA","MTECH"];
    this.ExperienceArray=["0-1 YEAR","2-5 YEAR","5-8 YEAR","> 8YEAR"];

    this.route.params.subscribe(params => {
        this.id = + params['id'];
      });
    this.http.get(this.url).subscribe(
      ( ) => {
 
        for(var i =0; i<this.employee.length; i++)
        {
          if(parseInt(this.employee[i].id)===this.id)
          {
            this.data=this.employee[i];
            break;
          }
        }
      }
    )
    
  }

}
