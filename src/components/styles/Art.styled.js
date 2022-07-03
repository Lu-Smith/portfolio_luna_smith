import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  background: linear-gradient(
    68.6deg,
    rgb(252, 165, 241) 1.8%,
    rgb(181, 255, 255) 100.5%
  );
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
`;

export const ArtContainer = styled.div`
  background-color: white;
  max-width: 800px;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  padding: 40px;
  border: 50px solid #ecb9f4;
  border-radius: 50px;
  margin-bottom: 50px;
`;

export const ArtTitle = styled.h1`
  color: #000;
  opacity: 60%;
  font-size: 38px;
  text-align: center;
  @media screen and (max-width: 786px) {
    margin-top: 24px;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ArtDescription = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: #000;
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
  margin-bottom: 12px;

  &:hover {
    filter: opacity(0.8);
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }
`;
