import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private http = inject(HttpClient);

  private api = 'http://localhost:8080/employees';

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.api);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.api}/${id}`);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.api, emp);
  }

  updateEmployee(id: number, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.api}/${id}`, emp);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}