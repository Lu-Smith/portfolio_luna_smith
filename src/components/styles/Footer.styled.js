import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 10px 24px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;

  @media screen and (max-width: 786px) {
    margin: 0 auto;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 20px 40px 20px;
    text-align: center;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 7860px) {
    margin: 0 auto;
    padding-bottom: 30px;
  }
`;

export const SocialIconLink = styled.a`
  color: #ffff;
  font-size: 24px;
`;

export const Portfolio = styled.a`
  color: #a2a8d3;
  font-size: 14px;
  text-decoration: none;
`;

export const GitHub = styled.a`
  color: #a2a8d3;
  font-size: 14px;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 280px;

  @media screen and (max-width: 7860px) {
    width: 230px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
`;
