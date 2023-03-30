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
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileMenuWrapper = styled.div`
  color: #fff;
`;

export const MobileMenuMenu = styled.ul`
  display: grid;
  grid-template-columns: lfr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 50px);
  }
`;
export const MobileMenuLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-decoration: none;
  list-style: none;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;

  &:hover {
    color: #04e2d7;
    transform: translateY(-5px);
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileMenuRoute = styled(LinkR)`
  border-radius: 40px;
  background: radial-gradient(circle at 50%, #547C86 10%, #000 86.6%);
  white-space: nowrap;
  padding: 14px 38px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 2px #2d4059;

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
    background: #010606;
  }

  @media screen and (max-width: 480px) {
    border-radius: 30px;
    font-size: 12px;
    padding: 10px 19px;
    margin: 20px auto;
  }
`;
