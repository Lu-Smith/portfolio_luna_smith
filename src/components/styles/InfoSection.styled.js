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
`



export const InfoContainer = styled.div`
  padding-top: 60px;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? `#f9f9f9` : `#010606`)};
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
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    height: 660px;
  }
`;

export const MainDescription = styled.div`
  display: grid;
  z-index: 1;
  height: 760px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;

  justify-content: center;
  background: ${({ lightBg }) => (lightBg ? `#F7BDCB` : `#212529`)};
  border-radius: 10px;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 200ms all ease-in-out;
  }

  a:hover {
    color: #03B4DA;
  }

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;

export const Description = styled.h2`
  color: #9f9e9a;
  margin: 0 auto;
  padding: 50px;
  font-size: 23px;
  line-height: 30px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  font-family: "Poiret One", cursive;
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
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: #38598b;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? `#f7f8fa` : `#010606`)};

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

  @media screen and (max-width: 480px) {
    font-size: 14px;
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
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  animation: ${rotate} infinite 20s linear;


  @media screen and (max-width: 768px) {
    width: 50%;
    display: block;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButtonLink = styled(LinkR)`
  margin: 0 auto;
  border-radius: 40px;
  background: linear-gradient(
    109.5deg,
    rgb(86, 255, 248) 5.4%,
    rgb(13, 11, 136) 73.4%,
    rgb(2, 2, 2) 95.4%
  );
  color: white;
  white-space: nowrap;
  padding: 12px 30px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background: #04ecc4;
    color: #010606;
  }
`;


