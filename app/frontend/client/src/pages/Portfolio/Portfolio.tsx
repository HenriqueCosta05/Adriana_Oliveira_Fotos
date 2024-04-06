import NavBar from "../../components/Portfolio/Navbar/NavBar";
import About from "../../components/Portfolio/Sections/About";
import Services from "../../components/Portfolio/Sections/Services";
import Testimonials from "../../components/Portfolio/Sections/Testimonials";
import { useFetch } from '../../hooks/useFetch';

export default function Portfolio() {
    const response = useFetch('../../db.json');

    //Navbar data
    const navbarData = response && response.navbar ? response.navbar : [];

    //Sections data
    const aboutData = response && response.about ? response.about : [];

    //Services data
    const servicesData = response && response.services ? response.services : [];

    return (
        <>
            <NavBar data={navbarData} />
            <About data={aboutData} />
            <Services data={servicesData} />
            <Testimonials data={response && response.testimonials ? response.testimonials : []} />
        </>
    );
}