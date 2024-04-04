import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface NavbarProps {
    logo?: object;
    links: string[];
    texts: string[];
}

export default function NavBar ({logo, links, texts}: NavbarProps) {
    return (
        <>
            <Navbar expand="lg" bg='primary'>
                <Container>
                    <Navbar.Brand href="#home">
                        {logo && <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className='rounded-full'/>}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-lg-end'>
                        <Nav>
                            {links.map((link, index) => (
                                <Nav.Link key={index} href={link} className='font-bold text-neutral mx-2'>{texts[index]}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}