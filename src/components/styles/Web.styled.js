import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  background: #1b2430;
  padding: 40px;
`;

export const GalleryContainer = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
`;

export const WebContainer = styled.div`
  background-color: #ececec;
  max-width: 800px;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  padding: 40px;
  border: 2px solid #51557e;
  border-radius: 50px;
  margin-bottom: 40px;
  margin-top: 40px;
  @media screen and (max-width: 786px) {
    padding: 30px;
  }
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const WebTitle = styled.h1`
  color: #1b2430;
  opacity: 60%;
  font-size: 38px;
  text-align: center;
  @media screen and (max-width: 786px) {
    margin-top: 24px;
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const WebDescription = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: #142d4c;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 600px;
  font-family: "Poiret One", cursive;
  font-style: italic;
  @media screen and (max-width: 786px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const GalleryWrap = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 50px;

  a {
    text-decoration: none;
    color: #9fd3c7;
    text-align: center;
    font-size: 12px;
    font-family: "Poiret One", cursive;
  }
  h1 {
    font-size: 19px;
  }
  @media screen and (max-width: 786px) {
    h1 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 14px;
    }
  }
  &:hover {
    filter: opacity(0.8);
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #51557e;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #9fd3c7;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }
`;
