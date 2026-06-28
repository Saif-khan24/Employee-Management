import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  private fb = inject(FormBuilder);
  private service = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    department: ['', Validators.required],
    salary: [0, Validators.required]
  });

  saveEmployee() {

    if (this.employeeForm.invalid) {
      return;
    }

    this.service.addEmployee(this.employeeForm.value as any)
      .subscribe(() => {
        alert("Employee Added Successfully");
        this.router.navigate(['/employees']);
      });
  }
}