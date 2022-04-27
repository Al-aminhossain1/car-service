import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
