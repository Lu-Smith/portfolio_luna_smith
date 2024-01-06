import styled, { keyframes }  from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const wave = keyframes`
  0% {
    transform: translateY(0);
    color: red;
  }
  30% {
    transform: translateY(-20px);
    color: red;
  }
  100% {
    transform: translateY(0px);
    color: black;
  }
`;

export const StyledHeader = styled.header`
  background: ${({ scrollNav }) =>
    scrollNav
      ? `#000`
      : `linear-gradient(112.1deg, rgb(0, 0, 0) 38.2%, transparent 40%, transparent 90.2%)`};
  color: ${({ theme }) => theme.font.header};
  padding: 40px 0;
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 30px 0;
    background: ${({ scrollNav }) =>
    scrollNav
      ? `#000`
      : ` linear-gradient(112.1deg, rgb(0, 0, 0) 58.2%, transparent 60%, transparent 90.2%);`};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const HiddenMessage = styled.div`
background-color: rgba(0, 0, 0, 0.8);
padding: 10px 20px;
border: 2px solid #dc2f2f;
position: absolute;
display: none;
top: 120px;
left: 80px;

@media screen and (max-width: 786px) {
  padding: 8px 15px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
`

export const Text = styled.h2`
font-size: 18px;
line-height: 30px;
color: #fff;
text-align: center;
font-style: italic;
font-weight: 300;

@media screen and (max-width: 786px) {
  font-size: 14px;
  line-height: 25px;
}

@media screen and (max-width: 480px) {
  font-size: 12px;
  line-height: 20px;
}
`

export const HeaderLogo = styled(LinkR)`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 24px;
  width: 45%;
  text-decoration: none;

  &:hover {
    div {
      display: flex;
    }
  }


  @media screen and (max-width: 786px) {
    width: 50%;
    margin-left: 14px;
  }
`;

export const LogoImage = styled.img`
  width: 400px;
  height: auto;

  @media screen and (max-width: 820px) {
    width: 320px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0;
    width: 260px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 1130px) {
    margin: 30px 40px 0 120px;
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    margin: 30px 40px 0 60px;
    font-size: 15px;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const MenuItems = styled.li`
  height: 100px;
  padding-left: 20px;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: ${wave} 0.5s ease-in-out;
    color: black;
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
    border-bottom: 3px solid #dc2f2f;
    height: 80%;
    color: #dc2f2f;
  }

  @media screen and (max-width: 1130px) {
    padding: 0 0.5rem;
  }
`;

export const MenuButton = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const MenuButtonLink = styled(LinkR)`
  border-radius: 40px;
  background: radial-gradient(circle at 50%, #547C86 10%, #000 86.6%);
  color: white;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms all ease-in-out;
  box-shadow: 0 4px 5px #2d4059;

  &:hover {
    background: #dc2f2f;
    color: #fff;
    transform: translateY(5px);
    box-shadow: none;
  }

  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }

`;
