import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo1 from "../images/logo.png";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
  Portfolio,
  GitHub,
  LogoImage,
} from "./styles/Footer.styled";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              onClick={toggleHome}
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-100}
            >
              <LogoImage src={Logo1} />
            </SocialLogo>
            <WebsiteRights>
              Luna Smith Art © {new Date().getFullYear()}, coded by{" "}
              <Portfolio
                href="//www.lunasmithart.com"
                target="_blank"
                aria-label="GitHub"
              >
                Luna Smith
              </Portfolio>{" "}
              open source on{" "}
              <GitHub
                href="//github.com/Lu-Smith/portfolio_luna_smith"
                target="_blank"
                aria-label="GitHub"
              >
                GitHub
              </GitHub>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/lunasmithart"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/lunasmithart/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/LunaSmithArt"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/watch?v=5aBwg6IMwGo"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/luna-smith/"
                target="_blank"
                aria-label="LinkendIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
