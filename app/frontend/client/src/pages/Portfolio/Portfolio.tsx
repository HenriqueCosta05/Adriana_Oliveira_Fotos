import NavBar from "../../components/Portfolio/Navbar/NavBar";
import About from "../../components/Portfolio/Sections/About";
import Contact from "../../components/Portfolio/Sections/Contact";
import Pricing from "../../components/Portfolio/Sections/Pricing";
import Services from "../../components/Portfolio/Sections/Services";
import Testimonials from "../../components/Portfolio/Sections/Testimonials";
import Footer from "../../components/System/Footer";
import { useFetch } from '../../hooks/useFetch';

export default function Portfolio() {
    const response = useFetch('../../db.json');

    //Navbar data
    const navbarData = response && response.navbar ? response.navbar : [];

    //Sections data
    const aboutData = response && response.about ? response.about : [];

    //Services data
    const servicesData = response && response.services ? response.services : [];

    //Testimonials data
    const testimonialsData = response && response.testimonials ? response.testimonials : [];

    //Pricing data
    const pricingData = response && response.pricing ? response.pricing : [];

    //Contact data
    const contactData = response && response.contact ? response.contact : [];


    return (
        <>
            <NavBar data={navbarData} />
            <About data={aboutData} />
            <Services data={servicesData} />
            <Testimonials data={testimonialsData} />
            <Pricing data={pricingData} />
            <Contact data={contactData} />
            <Footer />
        </>
    );
}