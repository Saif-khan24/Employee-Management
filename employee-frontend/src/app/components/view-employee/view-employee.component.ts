import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {
  employee!: Employee;
  private route = inject(ActivatedRoute);
  private service = inject(EmployeeService);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployee(id)
      .subscribe(data => {
        this.employee = data;
      });
  }
}