import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private service = inject(EmployeeService);
  private router = inject(Router);

  id!: number;

  employeeForm = this.fb.group({

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    department: ['', Validators.required],
    salary: [0, Validators.required]

  });

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getEmployee(this.id)
      .subscribe(emp => {

        this.employeeForm.patchValue(emp);

      });

  }

  updateEmployee() {

    this.service.updateEmployee(
      this.id,
      this.employeeForm.value as any
    ).subscribe(() => {
      alert("Employee Updated");
      this.router.navigate(['/employees']);
    });
  }
}