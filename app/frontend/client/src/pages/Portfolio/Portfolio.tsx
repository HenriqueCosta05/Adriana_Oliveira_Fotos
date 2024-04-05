import NavBar from "../../components/Portfolio/Navbar/NavBar";
import About from "../../components/Portfolio/Sections/About";
import '../../../db.json'
import { useFetch } from '../../hooks/useFetch';
import Services from "../../components/Portfolio/Sections/Services";
import Testimonials from "../../components/Portfolio/Sections/Testimonials";

export default function Portfolio() {
    const response = useFetch('../../db.json');

    //Navbar data
    const navbarData = response && response.navbar ? response.navbar : [];
    const navbarTexts = navbarData && navbarData.map((obj) => obj['title']);
    const navbarLinks = navbarData && navbarData.map((obj) => obj['href']);
    const navbarLogo = navbarData && navbarData.find((obj) => obj['id'] === 1);

    //Sections data
    const aboutData = response && response.about ? response.about : [];

    const aboutImg = aboutData.find((obj) => obj.id === 1);
    const aboutTitle = aboutData.find((obj) => obj.id === 2);
    const aboutDescription = aboutData.find((obj) => obj.id === 3);
    const aboutBtn = aboutData.find((obj) => obj.id === 4);
    const aboutImgGallery = aboutData.find((obj) => obj.id === 5);

    //Services data
    const servicesData = response && response.services ? response.services : [];
    const servicesIntro = servicesData.find((obj) => obj.id === 1);

    //Testimonials data
    const testimonialsData = response && response.testimonials ? response.testimonials : [];
    const testimonialsIntro = testimonialsData.find((obj) => obj.id === 1);

    return (
        <>
            <NavBar
                logo={navbarLogo}
                links={navbarLinks}
                texts={navbarTexts}
            />
            <About 
                img={aboutImg ? aboutImg.src : null}
                title={aboutTitle ? aboutTitle.title : null}
                description={aboutDescription ? aboutDescription.title : null}
                btnText={aboutBtn ? aboutBtn.title : null}
                btnLink={aboutBtn ? aboutBtn.href : null}
                imgGallery={aboutImgGallery ? aboutImgGallery.src : null}
            />
            <Services 
                introTitle={servicesIntro ? servicesIntro.title : null}
                introDescription={servicesIntro ? servicesIntro.description : null}
                info={servicesData.filter((obj) => obj.id !== 1)}
            />
            <Testimonials
                introTitle={testimonialsIntro ? testimonialsIntro.title : null}
                introDescription={testimonialsIntro ? testimonialsIntro.description : null}
                info={testimonialsData.filter((obj) => obj.id !== 1)}
            />
        </>
    );
}