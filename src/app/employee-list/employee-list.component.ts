import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   
 employeelist : Employee[] =[]
  constructor(private employeeservice : EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeservice.getEmployee().subscribe(employees => this.employeelist = employees)
  }
 
   deleteEmployee(id:number){
     this.employeeservice.deleteEmployee(id).subscribe( ()=>alert("deleted"));
     
   }

}
