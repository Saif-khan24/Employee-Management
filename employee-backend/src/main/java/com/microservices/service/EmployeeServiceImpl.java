package com.microservices.service;

import com.microservices.model.Employee;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private static final List<Employee> employees = new ArrayList<>();

    private static Long nextId = 1L;

    static {

        employees.add(new Employee(
                nextId++,
                "John",
                "Doe",
                "john@gmail.com",
                "IT",
                70000));

        employees.add(new Employee(
                nextId++,
                "Alice",
                "Smith",
                "alice@gmail.com",
                "HR",
                60000));

        employees.add(new Employee(
                nextId++,
                "Bob",
                "Johnson",
                "bob@gmail.com",
                "Finance",
                80000));
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employees;
    }

    @Override
    public Employee getEmployeeById(Long id) {

        return employees.stream()
                .filter(emp -> emp.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public Employee addEmployee(Employee employee) {

        employee.setId(nextId++);
        employees.add(employee);

        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existing = getEmployeeById(id);

        if (existing == null) {
            return null;
        }

        existing.setFirstName(employee.getFirstName());
        existing.setLastName(employee.getLastName());
        existing.setEmail(employee.getEmail());
        existing.setDepartment(employee.getDepartment());
        existing.setSalary(employee.getSalary());

        return existing;
    }

    @Override
    public boolean deleteEmployee(Long id) {

        Employee employee = getEmployeeById(id);

        if (employee == null) {
            return false;
        }

        employees.remove(employee);

        return true;
    }
}