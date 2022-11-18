// Write your solution in this file!

const employee = {
    Sam : "11 Broadway"
}

console.log(employee);

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
      };
  }

 updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway")


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;

}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")

function deleteFromEmployeeByKey(employee, key){    
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


deleteFromEmployeeByKey(employee, "Sam")

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, "Sam")