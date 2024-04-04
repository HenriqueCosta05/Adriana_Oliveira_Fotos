import NavBar from "../components/Portfolio/Navbar/NavBar";
import { useFetch } from '../hooks/useFetch';
import '../../db.json'
export default function Portfolio() {
    const response = useFetch('../../db.json');
    const navbarData = response && response.navbar ? response.navbar : [];
    const navbarTexts = navbarData && navbarData.map((obj) => obj['title']);
    const navbarLinks = navbarData && navbarData.map((obj) => obj['href']);
    const navbarLogo = navbarData && navbarData.find((obj) => obj['id'] === 1);
    return (
        <>
            <NavBar
                logo={navbarLogo}
                links={navbarLinks}
                texts={navbarTexts}
            />
        </>
    );
}