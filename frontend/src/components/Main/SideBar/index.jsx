import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'
import {Link} from "react-router-dom";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon  onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink as={Link} to='/' onClick={toggle}>Home</SidebarLink>
          <SidebarLink as={Link} to='menu' onClick={toggle}>Menu</SidebarLink>
          <SidebarLink as={Link} to='reservation' onClick={toggle}>Reservation</SidebarLink>
          <SidebarLink as={Link} to='gallery' onClick={toggle}>Gallery</SidebarLink>
          <SidebarLink as={Link} to='contact' onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
