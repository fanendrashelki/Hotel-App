import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Details from './Components/Details';
import BookingForm from './Components/BookingForm';
import Payment from './Components/Payment';


function App() {

  return (
    <>
    <Navbar/>

    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details/:name' element={<Details />} />
        <Route path='/Booking/' element={<BookingForm />} />
        <Route path='/payment/' element={<Payment />} />
      </Routes>
   
    </>
  );
}

export default App;
