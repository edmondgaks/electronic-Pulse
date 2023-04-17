import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib' // Context for changing Icon styles
import {animateScroll as scroll} from 'react-scroll'
import {Nav, 
        NavbarContainer, 
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink
    } from './NavbarElements'

// Navbar with built in scorll functionality
// =========================================
// 1. set up a listener that changes nav bar once scrolled a certain distance
// away from the top of the page
// 2. The items in the navbar have scroll functinality that 
// scrolls to sections identified by to=#id
// 3. The logo is activated to scroll to the top of the page if logo is clicked

function Navbar({toggle}) {

    // state to flag when scrolled 80 px distance from the top
    const [scrollNav, setScrollNav] = useState(false);

    // f() for changing state
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    // An event listener that monitors the scroll and runs the changeNav()
    useEffect(()=>{
        window.addEventListener('scroll', changeNav )
    },[])

    // Scroll to the top if hit the top of the page.
    const toggleHome = () => {
        scroll.scrollToTop(); // scrolls to the top
    }

    return (
        <>
        <IconContext.Provider value={{color: 'pink'}}>
           <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>ev-Pulsar</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='problems'
                                      smooth='easeInOutQuad'
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                    >
                                        Problems
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='solution'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                            >
                            Solution
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                      activeClass='active'
                            >
                            Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'
                                      smooth={true}
                                      duration={1500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                            >
                            Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='signin'
                                      smooth={true}
                                      duration={1000}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                            >
                            Sign In
                            </NavBtnLink>
                        </NavBtn>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </NavbarContainer>
           </Nav> 
        </IconContext.Provider>
        </>
    )
}

export default Navbar