import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from '../Components/Data'



const Details = () => {

  const { name } = useParams()
 
  return (
    <div className='container'>
      <div className='row mt-5 mb-5'>
        {
          Data.filter(val => val.name == name).map((val, index) => {
            localStorage.setItem('Payment_Data', JSON.stringify([val]))
            return (
              <>
                <div className='col-12  col-md-12 col-lg-12 p-0' key={index}>
                  <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={val.images[0]} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={val.images[1]} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={val.images[2]} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={val.images[3]} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className='col-12 col-md-12 col-lg-12 text-center bg-light'>
                  <h1 className='mt-5'>{val.name}</h1>
                  <div className='d-flex justify-content-between mt-2 fs-3' >
                    <p className='w-50  fw-bold' >{val.type} <br />{val.type === 'Standard' ?
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
                    <p className='w-50 text-center mt-3'>
                      <i className="bi bi-person-fill"></i>
                      {val.capacity}
                    </p>

                  </div>
                  <div className='d-flex justify-content-evenly mt-3 '>
                    {val.service.map((serValue) => {
                      return (
                        <div>
                          {serValue === "Wifi" ? <i className=" fs-2 fa-solid fa-wifi"></i>
                            : serValue === "food" ? <i className=" fs-2 fa-solid fa-bowl-food"></i>
                              : serValue === 'parking' ? <i className=" fs-2 fa-solid fa-square-parking"></i> : 'No Services'}
                        </div>
                      )
                    })
                    }
                  </div>
                  <div className='desc mt-1'>
                    <p>{val.description}</p>
                  </div>


                  <div className='mb-5'>
                       
                       <Link  to='/Booking'>
                       <button type="button " className="btn w-25  btn-bg">Book Now</button>
                       </Link>
                       
                   </div>
                </div>

              </>
            )
          })
        }
      </div>
    </div>


  )
}

export default Details