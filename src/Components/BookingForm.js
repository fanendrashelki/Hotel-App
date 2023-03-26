import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import Data from '../Components/Data'

const BookingForm = () => {
    
    const history = useNavigate();
    const [InputData, setInputData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        Check_In_Date: '',
        Check_Out_Date: '',


    })

    const [data, setData] = useState([])

    const handleInput = (e) => {
       
        const { name, value } = e.target
        setInputData((val) => {
            return {
                ...val,
                [name]: value
            }

        })
    }

    const submitData = (e) => {
        e.preventDefault();
        if (InputData.firstname) {
            if (InputData.lastname) {
                if (InputData.email && InputData.email.includes('@')) {
                    if (InputData.gender) {
                        if (InputData.address) {
                            if (InputData.city) {
                                if (InputData.state) {
                                    if (InputData.zip) {
                                        if (InputData.Check_In_Date) {
                                            if (InputData.Check_Out_Date) {
                                                if (InputData.mobile) {
                                                    localStorage.setItem('userData', JSON.stringify([...data, InputData]))
                                                    history('/payment/')
                                                } else {
                                                    Swal.fire('Enter Mobile Number')
                                                }


                                            } else {
                                                Swal.fire('Enter Check OUT Date')

                                            }

                                        } else {
                                            Swal.fire('Enter Check In Date')

                                        }

                                    } else {
                                        Swal.fire('Enter Zip')

                                    }

                                } else {
                                    Swal.fire('Enter State')

                                }

                            } else {
                                Swal.fire('Enter City')

                            }
                        } else {
                            Swal.fire('Enter Address')

                        }

                    } else {
                        Swal.fire('Enter Gender')

                    }

                } else {
                    Swal.fire('Enter Valid Email')

                }

            } else {
                Swal.fire('Enter Lastname')
            }
        } else {
            Swal.fire('Enter FirstName')
        }

    }



   
    return (

        <div className='container'>
            <div className='row mt-5'>
                <div className='col-8 mx-auto bg-light mt-5' >

                    <form className="row m-3">
                        <div className="col-md-6 col-12 mt-3">
                            <input type="text" className="form-control" name='firstname' value={InputData.firstname} onChange={handleInput} placeholder='Enter Your FirstName' />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text" className="form-control" name='lastname' value={InputData.lastname} onChange={handleInput} placeholder='Enter Your LastName' />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="email" className="form-control" name='email' value={InputData.email} onChange={handleInput} placeholder='Enter Your Email' />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="number" className="form-control" name='mobile' value={InputData.mobile} onChange={handleInput} placeholder='Enter Mobile No.' />
                        </div>
                        <div className='col-12 mt-2'>
                            Gender :
                            <input className="form-check-input m-2 p-1" type="radio" name="gender" value='male' required onChange={handleInput} />
                            Male
                            <input className="form-check-input m-2 p-1" type="radio" name="gender" value='female' required onChange={handleInput} />
                            Female
                            <input className="form-check-input m-2 p-1" type="radio" name="gender" value='other' required onChange={handleInput} />
                            Other
                        </div>


                        <div className="col-12 col-md-12 mt-3">
                            <input type="text" className="form-control" name='address' value={InputData.address} onChange={handleInput} placeholder="Address" />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text" className="form-control " name='city' value={InputData.city} onChange={handleInput} placeholder='City' />
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <input type="text" className="form-control" name='state' value={InputData.state} onChange={handleInput} placeholder='State' />
                        </div>

                        <div className="col-12 col-md-2 mt-3">
                            <input type="text" className="form-control" name='zip' value={InputData.zip} onChange={handleInput} placeholder='Zip' />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            Check-in Date :
                            <input type="date" className="form-control" name='Check_In_Date' value={InputData.Check_In_Date} onChange={handleInput} placeholder="dd-mm-yyyy" />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            Check-Out Date :
                            <input type="date" className="form-control" name='Check_Out_Date' value={InputData.Check_Out_Date} onChange={handleInput} placeholder="dd-mm-yyyy" />
                        </div>
                        <div className='mb-5 mt-5 text-center'>
                            <button type="button " className="btn w-50   btn-bg" onClick={submitData} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm