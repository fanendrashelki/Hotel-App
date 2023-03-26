import React from 'react'
import Data from '../Components/Data'
import Card from './Card'
const Main = () => {
    return (
        <>
            <div class="container ">
                <div class="row ">
                   
                        {
                            Data.map((val) => {
                                return (
                                    <Card 
                                    id={val.id}
                                    name={val.name}
                                    type={val.type}
                                    guests={val.capacity}
                                    img={val.images}
                                    desc={val.description}
                                    price={val.price}
                                    service={val.service}
                                    />

                                )
                            })
                        }
                  
                </div>
            </div>
        </>
    )
}

export default Main