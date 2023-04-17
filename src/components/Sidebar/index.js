import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute,
} from './SidebarElements';

function Sidebar({isOpen, toggle}) {


    return (
        <>
            <SidebarContainer isOpen={isOpen} isClick={toggle} >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='services' onClick={toggle}>
                            Problems
                        </SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>
                            Discover
                        </SidebarLink>
                        <SidebarLink to='about' onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to='signup' onClick={toggle}>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
            
        </>
    )
}

export default Sidebar
