import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import OurProducts from './components/OurProducts';
// import About from './components/About';
// import Header from './components/Header';
// import HeaderIcons from './components/HeaderIcons';
// import WeInNumbers from './components/WeInNumbers';
// import Faq from './components/Faq';
// import Maslahatlar from './components/Maslahatlar';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Home from './pages/Home';
import OrtopedikMatras from './pages/OrtopedikMatras';
import AnatomicMatras from './pages/AnatomicMatras';
import BezpurjinnieMatras from './pages/BezpurjinnieMatras';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ortopedik_matraslar' element={<OrtopedikMatras/>}/>
        <Route path='/anatomik_matraslar' element={<AnatomicMatras/>}/>
        <Route path='/purjinasiz_matraslar' element={<BezpurjinnieMatras/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
