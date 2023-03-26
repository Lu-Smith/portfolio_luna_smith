import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";

const rotate = keyframes`
from {
  transform: scale3d(.7, .2, .7)  rotate(0deg);
  opacity: 1;
}
to {
  transform: scale3d(1, 1, 1) rotate(360deg);
  opacity: 0.2;
}
`;
export const InfoContainer = styled.div`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  background: ${({ lightBg }) => (lightBg ? `#f9f9f9` : `radial-gradient(circle at 50%, #547C86 10%, #000 36.6%)`)};

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 640px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 740px;
  }

  @media screen and (max-width: 480px) {
    height: 760px;
  }
`;

export const MainDescription = styled.div`
  display: grid;
  z-index: 1;
  height: 760px;
  width: 100%;
  justify-content: center;
  background: ${({ lightBg }) => (lightBg ? `#F7BDCB` : `#212529`)};
  border-radius: 10px;
`;

export const LinkToSection = styled(LinkR)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: 200ms all ease-in-out;

  &:hover {
    color: #03b4da;
  }
`;

export const Description = styled.h2`
  margin: 0 auto;
  padding: 50px;
  font-size: 23px;
  line-height: 30px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    padding: 40px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1.2px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ ImgStart }) =>
      ImgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    text-align: center;
    max-width: 90%;
    margin: auto;
  }
`;

export const TopLine = styled.p`
  color: ${({ darkText }) => (darkText ? `#547C86` : `#dc2f2f`)};
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 30px 0 16px 0;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 1.2px;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? `#f7f8fa` : `#010606`)};

  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }

  @media screen and (max-width: 786px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 10px;
    font-size: 22px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? `#010606` : `#fff`)};

  @media screen and (max-width: 786px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const ArtGalleryWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 300px;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
  animation: ${rotate} infinite 20s linear;

  @media screen and (max-width: 820px) {
    width: 200px;
    display: block;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 25px;
`;

export const MenuButtonLink = styled(LinkR)`
  margin: 0 auto;
  border-radius: 40px;
  background: radial-gradient(circle at 50%, #000 30%, #547C86 96.6%);
  color: white;
  white-space: nowrap;
  padding: 12px 30px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0 4px 5px #2d4059;

  &:hover {
    background: #dc2f2f;
    transform: translateY(5px);
    box-shadow: none;
  }

  @media screen and (max-width: 480px) {
    border-radius: 30px;
    font-size: ${({ fontBig }) => (fontBig ? `12px` : `10px`)};
    padding: ${({ big }) => (big ? `7px 19px` : `8px 10px`)};
    margin: 20px auto;
  }
`;
