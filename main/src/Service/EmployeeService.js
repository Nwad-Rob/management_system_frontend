import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService{

    
   
    getEmployee(){
    return axios.get(BASE_API_URL);
    
   }

   createEmployee(employee){
    return axios.post(BASE_API_URL,employee);
   }

   updateEmployee(employee,employeeid){
    return axios.put(BASE_API_URL + '/' + employeeid,employee);
   }

   getEmployeeById(employeeId){
    return axios.get(BASE_API_URL + '/' + employeeId);
   }

   deleteEmployee(employeeId){
    return axios.delete(BASE_API_URL + '/' + employeeId);
   }
}

export default new EmployeeService()