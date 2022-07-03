import React from "react";
import {
  MobileMenuContainer,
  Icon,
  CloseIcon,
  MobileMenuWrapper,
  MobileMenuMenu,
  MobileMenuLink,
  SideBtnWrap,
  MobileMenuRoute,
} from "./styles/MobileMenu.styled";

function MobileMenu({ isOpen, toggle }) {
  return (
    <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileMenuWrapper>
        <MobileMenuMenu>
          <MobileMenuLink to="about" onClick={toggle}>
            About
          </MobileMenuLink>
          <MobileMenuLink to="webdesigns" onClick={toggle}>
            Web Designs
          </MobileMenuLink>
          <MobileMenuLink to="fineart" onClick={toggle}>
            Fine Art
          </MobileMenuLink>
          <MobileMenuLink to="illustrations" onClick={toggle}>
            Illustrations
          </MobileMenuLink>
        </MobileMenuMenu>
        <SideBtnWrap>
          <MobileMenuRoute to="/contact" onClick={toggle}>
            Contact me
          </MobileMenuRoute>
        </SideBtnWrap>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
}

export default MobileMenu;
