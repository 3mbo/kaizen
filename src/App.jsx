import Header from './components/Header/Header.jsx';
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import About from "./components/About/About.jsx";
import Events from "./components/Events/Events.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
    return (
        <div className="App">
            <div>
                <div className="white-gradient"/>
                <Header/>
                <Hero/>
            </div>
            <Testimonials/>
            <About/>
            <Events/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App