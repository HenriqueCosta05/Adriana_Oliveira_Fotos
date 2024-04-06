import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from '../../Shared/Image/Image';

export default function NavBar({ data }) {
    const logo = data && data[0]
    const links = data && data.map((item) => item.href)
    const texts = data && data.map((item) => item.title)
    
    return (
        <>
            <Navbar expand="lg" bg='primary'>
                <Container>
                    <Navbar.Brand href="#">
                        {logo && <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className='rounded-full'/>}
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