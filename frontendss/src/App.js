import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import FAQs from './Components/FAQs';
import Testimonials from './Components/Testimonials';
import Blog from './Components/Blog';
import Quote from './Components/Quote';
import LogoDesign from './Pages/LogoDesign';
import Posterdesign from './Pages/Posterdesign';
import Thumbnail from './Pages/Thumbnail';
import Banner from './Pages/Banner';
import Webdesign from './Pages/Webdesign';
import Videoedit from './Pages/Videoedit';
import SocialMedia from './Pages/SocialMedia';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/testomonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quote" element={<Quote />} />
          {/* Pages */}
          <Route path="/logodesign" element={<LogoDesign />} />
          <Route path="/posterdesign" element={<Posterdesign />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/videoedit" element={<Videoedit />} />
          <Route path="/socialmedia" element={<SocialMedia />} />


          
        </Routes>
        <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
