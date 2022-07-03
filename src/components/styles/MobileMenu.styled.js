import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const MobileMenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.font.header};
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? `100%` : `0`)};
  top: ${({ isOpen }) => (isOpen ? `0` : `-100%`)};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileMenuWrapper = styled.div`
  color: #fff;
  margin-top: 40px;
`;

export const MobileMenuMenu = styled.ul`
  display: grid;
  grid-template-columns: lfr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;
export const MobileMenuLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileMenuRoute = styled(LinkR)`
  border-radius: 40px;
  background: radial-gradient(circle at 3% 4.8%, #d404fa 0%, #fa0421 86.6%);
  white-space: nowrap;
  padding: 14px 50px;
  font-size: 20px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #04f1be;
    color: #010606;
  }
`;
