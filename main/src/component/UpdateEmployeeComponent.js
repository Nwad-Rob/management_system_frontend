import React, { useEffect, useState } from 'react'
import EmployeeService from '../Service/EmployeeService'
import {Link, useParams} from 'react-router-dom'

export const UpdateEmployeeComponent = () => {

    const [ firstName, setFirstName] = useState('')
    const [ lastName, setLastName ] =  useState('')
    const [email, setEmail]         =  useState('') 
    const {id} = useParams();


    const UpdateEmployeeComponent = (e) =>{
        e.preventDefault();

        const employee = {firstName, lastName,email}

        EmployeeService.updateEmployee(id, employee).then(res =>{
            window.location.replace('/employees')
        }).catch(error =>{
            console.log(error)
        });

    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () =>{
        if(id){
            return <h2 className='text-center'> Update Employee</h2>
        }else{
            return <h2 className='text-center'> Add Employee</h2>
        }
    }

  return (
    <div>
        <br></br>
        <div className="container">
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'> First Name</label>
                                <input type = 'text' placeholder='First Name' name='firstName' className='form-control'
                                            value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'> Last Name</label>
                                <input type = 'text' placeholder='Last Name' name='lastName' className='form-control'
                                            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'> Email</label>
                                <input type = 'text' placeholder='Email' name='email' className='form-control'
                                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                                
                            </div>

                            <button className='btn btn-success' onClick={(e => UpdateEmployeeComponent(e))}> Update </button>
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

export default UpdateEmployeeComponent
