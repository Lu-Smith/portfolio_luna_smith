import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const StyledHeader = styled.header`
  background: ${({ scrollNav }) => (scrollNav ? `#000` : `transparent`)};
  color: ${({ theme }) => theme.font.header};
  padding: 40px 0;
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const HeaderLogo = styled(LinkR)`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 280px;

  @media screen and (max-width: 7860px) {
    width: 230px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 30px 50px 0 120px;
  font-size: 18px;

  @media screen and (max-width: 1130px) {
    margin: 30px 40px 0 120px;
    font-size: 17px;
  }

  @media screen and (max-width: 1000px) {
    margin: 30px 40px 0 60px;
    font-size: 16px;
  }

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const MenuItems = styled.li`
  height: 100px;
  padding-left: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #04ecc4;
  }
  @media screen and (max-width: 1130px) {
    padding-left: 5px;
  }
`;

export const MenuLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #04cffa;
    height: 80%;
    color: #04cffa;
  }

  @media screen and (max-width: 1130px) {
    padding: 0 0.5rem;
  }
`;

export const MenuButton = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const MenuButtonLink = styled(LinkR)`
  border-radius: 40px;
  background: radial-gradient(circle at 3% 4.8%, #d404fa 0%, #fa0421 86.6%);
  color: white;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #04ecc4;
    color: #010606;
  }

  @media screen and (max-width: 1130px) {
    font-size: 14px;
  }
`;
