import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import AllProjects from "./Projects/AllProjects";
import WebsiteDesignProjects from "./Projects/WebsiteDesign";
import MobileAppDesign from "./Projects/MobileAppDesign";
import WebDevelopmentProjects from "./Projects/WebDevelopment";
import React from 'react';
const LazyHome = React.lazy(()=> import('./Home/Home'));
const LazyAbout = React.lazy(() => import('./Projects/Projects'));
const LazyContact = React.lazy(() => import('./ContactUs/ContactUs'))
function App() {



  return (
    <div className="App">

      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <React.Suspense fallback='Wait...'> <LazyHome/> </React.Suspense>} />
          <Route path='/projects' element={<React.Suspense fallback='Wait...'>
            <LazyAbout />
          </React.Suspense>}>
            <Route index element={<AllProjects />} />
            <Route path="website-design" element={<WebsiteDesignProjects />} />
            <Route path="mobile-app-design" element={<MobileAppDesign />} />
            <Route path="web-development" element={<WebDevelopmentProjects />} />
          </Route>
          <Route path='/contact-us' element={<React.Suspense fallback='Wait...'>
            <LazyContact />
          </React.Suspense>} />
        </Routes>
      </>

      {/* <Home/> */}
    </div>
  );
}

export default App;
