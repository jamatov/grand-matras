import './App.scss';
import './Responsive.scss'
import { Route, Routes } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import TranslationRU from './locale/Ru';
import TranslationUZ from './locale/Uz';
import Footer from './components/Footer';
import Home from './pages/Home';
import OrtopedikMatras from './pages/OrtopedikMatras';
import AnatomicMatras from './pages/AnatomicMatras';
import BezpurjinnieMatras from './pages/BezpurjinnieMatras';
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About';
import Products from './pages/Products';
import Pt from './components/Pt';

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: TranslationUZ },
    ru: { translation: TranslationRU },
  },
  lng: "uz",
  fallbackLng: "uz",
});

function App() {
  const { pathname } = useLocation();
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };
  return (
    <div className="App">
      <Navbar changeLang={changeLang}/>
      <Pt/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/biz_haqimizda' element={<About/>}/>
        <Route path='/mahsulotlar' element={<Products/>}/>


        <Route path='/ortopedik_matraslar' element={<OrtopedikMatras/>}/>
        <Route path='/anatomik_matraslar' element={<AnatomicMatras/>}/>
        <Route path='/purjinasiz_matraslar' element={<BezpurjinnieMatras/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
