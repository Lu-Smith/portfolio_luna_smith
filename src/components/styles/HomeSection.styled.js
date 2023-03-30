import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  position: relative;
  z-index: 1;
  color: black;

  @media screen and (max-width: 1200px) {
    height: 110vh;
  }

  @media screen and (max-width: 820px) {
    height: 110vh;
  }

  @media screen and (max-width: 480px) {
    height: 142vh;
  }

  @media screen and (max-height: 750px) {
    height: 160vh;
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
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 820px) {
    top: 130px;
    flex-direction: column;
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  align-items: center;
  display: flex;

  @media screen and (max-width: 786px) {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const MainContainer = styled.div`
  width: 60%;
  align-items: center;
  padding: 30px;

  @media screen and (max-width: 786px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
export const HomeH1 = styled.h1`
  font-family: 'Alkatra', cursive;
  font-size: 34px;
  line-height: 45px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (max-width: 786px) {
    margin-top: 24px;
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 20px 0 20px;
    font-size: 22px;
    line-height: 35px;
  }
`;

export const HomeP = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  text-align: center;
  max-width: 80%;


  a {
    text-decoration: none;
    transition: 200ms all ease-in-out;
    color: #dc2f2f;
    font-weight: 900;
    display: block;
    padding-top: 20px;

    span {
      font-weight: 700;
    }
  }

  a:hover {
    color: black;
  }

  @media screen and (max-width: 1200px) {
    max-width: 85%;
  }

  @media screen and (max-width: 786px) {
    font-size: 15px;
    max-width: 90%;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-top: 20px;
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
