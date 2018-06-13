// Exercise after CONSTRUCTOR FUNCTIONS lecture

employees = [];

var Employee = function (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function () {
        console.log('\n\n'+ this.name, this.jobTitle, this.salary, this.status);
    }
}

var employeeOne = new Employee('Bob', 'V School Instructor', '$3,000/hr');
var employeeTwo = new Employee('Han Solo','Rebellion', 'Credits');
employeeTwo.status = "Part-Time";
var employeeThree = new Employee('Nate', 'Student', 'Wampum');
employeeThree.status = "Contract";
employees.push(employeeOne, employeeTwo, employeeThree);

console.log(employees);

employeeTwo.printEmployeeForm();