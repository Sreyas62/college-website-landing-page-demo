import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Notification from "./components/Notification/Notification"
function page() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Notification/>
    <Contact />
    <Footer/>
    </>
  )
}

export default page
