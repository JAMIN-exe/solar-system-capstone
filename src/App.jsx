import {useRef} from "react";
import Hero from './components/Hero/hero';
import PlanetVideo from'./components/PlanetVideo/planetvideo';
import PlanetGrid from './components/PlanetGrid/planetgrid';
import PlanetTable from'./components/PlanetTable/planettable';
import ContactForm from "./components/ContactForm/contactform";
import Footer from "./components/Footer/footer";
import "./styles/index.css";


export default function App() {
    const planetsRef = useRef(null);
    const formRef = useRef(null);

    const scrollTo= (ref) => ref.current?.scrollIntoView({behaviour: 'smooth'});
    return (
        <>
            <Hero onExplore={() => scrollTo(planetsRef)} onContact={() => scrollTo(formRef)} />
            <PlanetVideo />
            <PlanetGrid planetsRef={planetsRef} />
            <PlanetTable />
            <ContactForm formRef={formRef} />
            <Footer />
        </>
    );
}

