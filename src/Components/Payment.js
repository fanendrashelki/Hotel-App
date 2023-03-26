import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {


  const getUserData = JSON.parse(localStorage.getItem("userData"))
  const payment_Data = JSON.parse(localStorage.getItem("Payment_Data"))
  console.log(getUserData);
  console.log(payment_Data);
  const { firstname, lastname, email, mobile, gender, address, city, state, zip, Check_In_Date, Check_Out_Date } = getUserData[0]
  const { id, name, type, capacity, img, price, service, } = payment_Data[0]

  function onToken(token) {
    console.log(token);
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-evenly text-dark bg-light mt-5 mb-5">
        <div className="col-12 col-md-10 col-lg-8 border p-5 mt-5">
          <h1 className="text-center mb-4">{name}</h1>
          <hr />
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-12 col-lg-6">
              <h4>Invoice Details: </h4>
              <p><strong>Invoice Number: </strong> INV-0001</p>
              <p><strong>Date: </strong>{city}</p>
              <p><strong>Date: </strong>{Check_In_Date}</p>
            </div>
            <div className="col-md-6 col-12 col-lg-6">
              <h4>Customer Details:</h4>
              <p><strong>Name: </strong> {firstname} {lastname}</p>
              <p><strong>Email: </strong> {email}</p>
              <p><strong>Email: </strong> {mobile}</p>
            </div>
          </div>
          <hr />
          <h3 className="text-center">Booking Details:</h3>
          <div className="row d-flex justify-content-evenly mt-5">
            <div className="col-md-6 col-12 col-lg-6">
              <p><strong>Room Type:</strong> {type} Room</p>
              <p><strong>Check-in Date:</strong> {Check_In_Date}</p>
              <p><strong>Check-out Date:</strong> {Check_Out_Date}</p>
            </div>
            <div className="col-md-6 col-12 col-lg-6  ">
              <p><strong>Number of People:</strong> {capacity}</p>
              <p><strong>Price :</strong> {price}</p>
              <p><strong>Total Price: </strong>{price}</p>
            </div>
          </div>
        </div>

        <div className='text-center mb-5  mt-5'>


          <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51MpXhOSB8w7UYgiLVgk7ra7LwUBOkhsEr6YXmPL2e0dSOs4gJ43UhVol1N50TAVbKfnxUUIS3PQMuONYyx1Owmhb00K1C13a1S"
          >
            <button type="button " className="btn w-25 btn-bg">Pay Now </button>
          </StripeCheckout>

        </div>
      </div>
    </div>

  )
}

export default Payment