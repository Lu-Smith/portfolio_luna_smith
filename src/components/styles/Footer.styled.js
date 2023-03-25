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
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 10px 24px;
  }
`;

export const SocialLogo = styled(Link)`
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  margin: 20px 0 50px 0;

  @media screen and (max-width: 786px) {
    margin: 20px 0 0 0;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 30px;

  @media screen and (max-width: 786px) {
    font-size: 13px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 786px) {
    margin: 0 auto;
    padding-bottom: 30px;
  }
`;

export const SocialIconLink = styled.a`
  color: #ffff;
  font-size: 24px;
  margin-top: 20px;
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
  width: 400px;
  height: auto;

  @media screen and (max-width: 786px) {
    width: 230px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
`;
