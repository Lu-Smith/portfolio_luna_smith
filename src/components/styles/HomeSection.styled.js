import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 140vh;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    height: 1000px;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 786px) {
    top: 120px;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  align-items: center;
  display: flex;

  @media screen and (max-width: 786px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const MainContainer = styled.div`
  width: 60%;
  align-items: center;

  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;
export const HomeH1 = styled.h1`
  color: #fff;
  opacity: 60%;
  font-size: 38px;
  text-align: center;
  @media screen and (max-width: 786px) {
    margin-top: 24px;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 20px 0 20px;
    font-size: 28px;
  }
`;

export const HomeP = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  font-family: "Poiret One", cursive;
  font-style: italic;

  .title,
  .date {
    color: #fa9109;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #fa9109;
    transition: 200ms all ease-in-out;
  }

  a:hover {
    color: #fff;
  }

  @media screen and (max-width: 786px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 786px) {
    margin-top: 0;
    flex-direction: column;
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
