import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsCart4 } from 'react-icons/bs';


import "./Header.css";

function Header(){


    return (
        <header className='header'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">H&M</Navbar.Brand>
                    <Nav className="me-auto"></Nav>
                    <Link to="/login"><BsFillPersonFill />로그인</Link>
                    {/* <Nav.Link><BsCart4 />카트</Nav.Link> */}
                    <Link to="/cart"><BsCart4 />카트</Link>
                </Container>
            </Navbar>
            <ul className="cat">
                <li><Link to="/company">회사소개</Link></li>
                <li><Link to="/man">남성</Link></li>
                <li><Link to="/pos">지속가능성</Link></li>
                <li><Link to="/Loc">매장찾기</Link></li>
                <li><Link to="/Serve">고객서비스</Link></li>
                <li><Link to="/brand">브랜드</Link></li>
                <li><Link to="/joinus">우리와 함께</Link></li>
                <li><Link to="/media">미디어</Link></li>
                
            </ul>
        </header>
    )

    
}

export default Header;