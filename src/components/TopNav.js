import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const TopNav = () => {
    const [activeLink, setActiveLink]= useState('home')
    const [scrolled, setScrolled]= useState(false)
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);
        return()=> window.removeEventListener("scroll", onScroll)
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink('value');
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src='' alt='logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toogler-icon'> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Projects</Nav.Link>                        
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'> <img src='' alt=''></img> </a>
                            <a href='#'> <img src='' alt=''></img> </a>
                            <a href='#'> <img src='' alt=''></img> </a>
                        </div>
                        <button className='vvd ' onClick={()=>console.log('connect')}> <span>Let's connect</span> </button> 
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;