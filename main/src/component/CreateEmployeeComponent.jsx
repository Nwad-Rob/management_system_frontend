import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService';


export default class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',

            employees : []
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailhandler = this.changeEmailhandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
 


    

            
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            window.location.replace('/employees')
        });
    }
    

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailhandler = (event) => {
        this.setState({ email: event.target.value });
    }

    
    
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Add Employee</h3>
                            <div className='card-body'>
                                <form action="">
                                    <div className='form-group'>
                                        <label> First Name</label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Address</label>
                                        <input placeholder='email' name='email' className='form-control'
                                            value={this.state.email} onChange={this.changeEmailhandler} />
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <Link to= "/employees">
                                        <button className='btn btn-danger'> Cancel </button>
                                    </Link>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
