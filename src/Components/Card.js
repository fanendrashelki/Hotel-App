import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {id, name, type, guests, img, price, service ,title} = props
    return (
        <>
            <div className="col-10 col-md-6 col-lg-4 col-lg-4 m-4 p-4 mx-auto " key={id}>
                <div className="card card-box">
                    <img src={img[0]} alt='img' />
                    <div className="card-body ">
                        <div className='card_header d-flex justify-content-between m-2'>
                            <div className='w-50'>
                                <h5>{name}</h5>
                            </div>
                            <div className='w-50 text-end'>
                                <p ><i className="bi bi-currency-rupee"></i>{price}</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between m-2' >
                            <p className='w-50  fw-bold' >{type} <br />{type === 'Standard' ?
                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                : <div>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>}
                            </p>
                            <p className='w-50 text-end fs-4'>
                                <i className="bi bi-person-fill"></i>
                                {guests}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between m-2'>
                            {service.map((serValue) => {
                                return(
                                    <div>
                                        {serValue ==="Wifi"?<i className="fa-solid fa-wifi"></i>
                                        :serValue ==="food"?<i className="fa-solid fa-bowl-food"></i>
                                        :serValue==='parking'?<i className="fa-solid fa-square-parking"></i>:'No Services' }
                                    </div>
                                )
                            })
                            }
                        </div>
                        
                        <div className='mt-5'>
                       
                            <Link to={`/details/${name}`}>
                            <button type="button " className="btn w-100 btn-bg">View Details</button>
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card