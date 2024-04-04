import NavBar from "../components/Portfolio/Navbar/NavBar";
import About from "../components/Portfolio/Sections/About";
import '../../db.json'
import { useFetch } from '../hooks/useFetch';

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
        </>
    );
}