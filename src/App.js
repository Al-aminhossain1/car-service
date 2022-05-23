import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/Login/LogIn';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFount from './Pages/NotFount/NotFount';
import Register from './Pages/LogIn/Register/Register';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>}>
        </Route>
        <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFount></NotFount>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
