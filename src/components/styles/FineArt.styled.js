import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const PaintingsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px) {
    height: 1800px;
    padding-top: 150px;
    padding-bottom: 150px;
  }
  @media screen and (max-width: 480px) {
    height: 1900px;
  }
`;

export const PaintingsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 18px;
  padding: 0 60px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PaintingsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PaintingsIcon = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 10px;
  border: 5px solid black;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  
`;

export const PaintingsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

export const ShopBtnLink = styled.a`
text-decoration: none;
background-color: #FA9109;
color: #fff;
padding: 10px 20px;
border-radius: 20px;
border: none;
white-space: nowrap;
display: flex;
margin: 30px auto;
justify-content: center;
align-items: center;
transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
box-shadow: 0 4px 5px #fff;

&:hover {
  background-color: red;
  transform: translateY(5px);
  box-shadow: none;
}
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButtonLink = styled(LinkR)`
  color: #000;
  text-align: center;
  margin: 0 auto;
  border-radius: 40px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    padding: 20px;
  }
`;

export const PaintingsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PaintingsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
