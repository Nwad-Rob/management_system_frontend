import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';
import { Link } from 'react-router-dom';
export default class ListEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
              employees : []
        }
        
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    editEmployee(id){
      window.location.replace(`/update-employee/${id}`);
    }

    deleteEmployee(id){
      EmployeeService.deleteEmployee(id).then((res) => {
        this.componentDidMount();
     }).catch(error =>{
      console.log(error);
     })
    }


  componentDidMount(){
     EmployeeService.getEmployee().then((res) => {
          this.setState({employees : res.data});
     });
  }
  render() {
    return (
      <div>
        <h2 className='text-center'> List of Employees </h2>
        <div className='row'>
          <Link to="/add-employee">
                        <button className='btn btn-primary'>Add Employee</button>
                    </Link>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        
                            <th> Firstname</th>
                            <th> Lastname</th>
                            <th> Email</th>
                            <th> Actions</th>

			            
                    </tr>
                </thead>
                <tbody>
                {
                        this.state.employees.map(
                            employee => 
                            <tr key = {employee.id}>
                                <td> {employee.firstName}</td>
                                <td> {employee.lastName}</td>
                                <td> {employee.email}</td>
                                <td>
                                  <button className='btn btn-info' onClick={ () => this.editEmployee(employee.id)}> Update</button>
                                  <button className= 'btn btn-danger' onClick= {() => this.deleteEmployee(employee.id)} style = {{marginLeft:"20px"}} > Delete </button>
                                </td>
                            </tr>

                        )
                 }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
