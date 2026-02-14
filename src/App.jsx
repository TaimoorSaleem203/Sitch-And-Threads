import Navbar from "./components/Navbar"
import LandPage from "./components/LandPage"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"

const App = () => {
  return (
    <>

    <section className="overflow-hidden">
      <Navbar />
      <LandPage />
      <AboutUs />
      <Services />
      <Portfolio />
    </section>
    </>
  )
}

export default App