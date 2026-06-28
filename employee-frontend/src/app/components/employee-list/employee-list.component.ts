import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  searchText = '';

  private service = inject(EmployeeService);

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  searchEmployees() {
    const search = this.searchText.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.firstName.toLowerCase().includes(search) ||
      emp.lastName.toLowerCase().includes(search) ||
      emp.email.toLowerCase().includes(search) ||
      emp.department.toLowerCase().includes(search)
    );
  }

  delete(id: number) {
    if (confirm("Delete Employee?")) {
      this.service.deleteEmployee(id)
        .subscribe(() => {
          this.loadEmployees();
        });
    }
  }
}