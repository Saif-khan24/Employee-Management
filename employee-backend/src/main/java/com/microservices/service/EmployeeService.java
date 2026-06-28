package com.microservices.service;

//package com.example.employee.service;

import com.microservices.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    Employee addEmployee(Employee employee);

    Employee updateEmployee(Long id, Employee employee);

    boolean deleteEmployee(Long id);
}