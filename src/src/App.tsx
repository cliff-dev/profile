
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { navLinks, footerLinks } from './constants/indexPage'
import Hero from './components/hero'
import CTA from './components/cta'
import CONTACTME from './components/contactme'
import PROJECT1 from './components/project1'
import PROJECT2 from './components/project2'
import PROJECT3 from './components/project3'
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <Router>
    <div>
    <div className="gradient__bg">
    <Navbar navlinks={navLinks} />
    <Hero/>
    </div>
      <CTA />
      <PROJECT1 />
      <PROJECT2 />
      <PROJECT3 />
      <CONTACTME />
    <Footer footerlinks={footerLinks} />
    </div>
    <Analytics />
    </Router>
  )
}

export default App
