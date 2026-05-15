import { useEffect } from 'react'
import TopBar from './components/TopBar.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Founders from './components/Founders.jsx'
import Specialties from './components/Specialties.jsx'
import Conditions from './components/Conditions.jsx'
import Lab from './components/Lab.jsx'
import Clinical from './components/Clinical.jsx'
import Compare from './components/Compare.jsx'
import Investment from './components/Investment.jsx'
import WhyWin from './components/WhyWin.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Respect reduced-motion: pause the animated logo SVGs
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.querySelectorAll('svg.logo-mark').forEach((svg) => {
        if (svg.pauseAnimations) svg.pauseAnimations()
      })
    }
  }, [])

  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <Founders />
      <Specialties />
      <Conditions />
      <Lab />
      <Clinical />
      <Compare />
      <Investment />
      <WhyWin />
      <ContactForm />
      <Footer />
    </>
  )
}
