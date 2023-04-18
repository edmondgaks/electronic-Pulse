import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink
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
                        <SidebarLink to='problems' onClick={toggle}>
                            Problems
                        </SidebarLink>
                        <SidebarLink to='solution' onClick={toggle}>
                            Solutions
                        </SidebarLink>
                        <SidebarLink to='market' onClick={toggle}>
                            Market Plan
                        </SidebarLink>
                        <SidebarLink to='Competition' onClick={toggle}>
                            Competition
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
            
        </>
    )
}

export default Sidebar
