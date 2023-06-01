import './App.css';
import './style.css';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import About1 from './components/about1/about1';
import Form from './components/login/login';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact value='$50' />} />
        <Route path='/about' element={<About />} />
        <Route path='/about1' element={<About1 />} />
        <Route path='/login' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
