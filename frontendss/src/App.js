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
import SearchResults from './Components/SearchResults.jsx';
import MultiServices from './Pages/MultiServices.jsx';
import OnlineClass from './Pages/OnlineClass.jsx';
import ClassDetail from './Pages/ClassDetail.jsx';
import MetaAds from './Pages/MetaAds.jsx';
import PresentationPage from './Pages/PresentationPage.jsx';

import { useState } from 'react';
//https://nrsaz.onrender.com

function App() {
    const [reload, setReload] = useState(false);

  const triggerReload = () => setReload(!reload);
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
           <Route path="/search" element={<SearchResults />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/search" element={<SearchResults />} />
        {/* Add your other routes here */}
          {/* Pages */}
          <Route path="/logodesign" element={<LogoDesign />} />
          <Route path="/posterdesign" element={<Posterdesign />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/videoedit" element={<Videoedit />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/MultiServices" element={<MultiServices />} />
          <Route path="/online-class" element={<OnlineClass />} />
          <Route path="/online-class/:classSlug" element={<ClassDetail />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/presentations" element={<PresentationPage />} />





          
        </Routes>
        <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
