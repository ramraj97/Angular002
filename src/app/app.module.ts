import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {  HttpClientModule } from '@angular/common/http';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { FormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeInputComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path : 'list' , component : EmployeeListComponent},
        {path : 'input' , component : EmployeeInputComponent},
        {path : 'update/:id' , component : EmployeeUpdateComponent},
        {path : '' , redirectTo :'list', pathMatch : 'full'},
        {path : '**' , redirectTo :'list', pathMatch : 'full'}

      ]
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
