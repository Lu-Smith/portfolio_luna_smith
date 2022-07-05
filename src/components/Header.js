import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  StyledHeader,
  HeaderContainer,
  HeaderLogo,
  LogoImage,
  MobileIcon,
  HeaderMenu,
  MenuItems,
  MenuLinks,
  MenuButton,
  MenuButtonLink,
} from "./styles/Header.styled";
import Logo1 from "../images/logo.png";

export default function Header({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener(`scroll`, changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <StyledHeader scrollNav={scrollNav}>
        <HeaderContainer>
          <HeaderLogo to="/" onClick={toggleHome}>
            <LogoImage src={Logo1} />
          </HeaderLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <HeaderMenu>
            <MenuItems>
              <MenuLinks
                to="about"
                smooth="true"
                duration={500}
                spy="true"
                exact="true"
                offset={-100}
              >
                About
              </MenuLinks>
            </MenuItems>
            <MenuItems>
              <MenuLinks
                to="webdesigns"
                smooth="true"
                duration={500}
                spy="true"
                exact="true"
                offset={-100}
              >
                Web Designs
              </MenuLinks>
            </MenuItems>
            <MenuItems>
              <MenuLinks
                to="fineart"
                smooth="true"
                duration={500}
                spy="true"
                exact="true"
                offset={-100}
              >
                Fine Art
              </MenuLinks>
            </MenuItems>
            <MenuItems>
              <MenuLinks
                to="illustrations"
                smooth="true"
                duration={500}
                spy="true"
                exact="true"
                offset={-100}
              >
                Illustrations
              </MenuLinks>
            </MenuItems>
          </HeaderMenu>
          <MenuButton>
            <MenuButtonLink
              to="contact"
              smooth="true"
              spy="true"
              duration={500}
              exact="true"
              offset={-100}
            >
              Contact me
            </MenuButtonLink>
          </MenuButton>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
}
