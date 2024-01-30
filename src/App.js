import React from 'react'
import AppbarComponent from './Components/NavigationBar/AppbarComponent'
import Hero from './Components/HeroSection/Hero'
import Class from './Components/Class/Class'
import Grad from './Components/Graduates/Grad'
import Skills from './Components/Skills/Skills'
import Premium from './Components/Premium/Premium'
import Career from './Components/Careers/Career'
import Testimonials from './Components/Testimonials/Testimonials'
import About from './Components/About/About'
import Faq from './Components/FaqComo/Faq'
import Form from './Components/Feedback/Form'
import Footer from './Components/Footers/Footer'
function App() {
  return (
    <div >
      <AppbarComponent/>
      <Hero/>
      <Class/>
      <Grad/>
      <Skills/>
      <Career/>
      <Premium/>
      <Testimonials/>
      <br />
      <br />
      <About/>
      <Faq/>
      <Form/>
      <Footer/> 
    </div>
  )
}

export default App