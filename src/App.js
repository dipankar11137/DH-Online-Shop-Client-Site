
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Share/Navbar'
import Footer from './Components/Share/Footer'
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';
import AddAReview from './Components/Pages/AddAReview/AddAReview';
import MyOrder from './Components/Pages/MyOrder/MyOrder';
import MyProfile from './Components/Pages/MyProfile/MyProfile';
import BookingOrder from './Components/Pages/Dashboard/BookingOrder';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/addAReview' element={<AddAReview />} />
        <Route path='/myOrder' element={<MyOrder />} />
        <Route path='/myProfile' element={<MyProfile />} />
        <Route path='/bookingOrder' element={<BookingOrder />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
