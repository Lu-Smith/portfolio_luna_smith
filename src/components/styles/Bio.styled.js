import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  background: #1d1d1b;
  padding: 40px;

  img {
    width: 100%;
  }
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

export const BioContainer = styled.div`
  background-color: black opacity(0.5%);
  max-width: 800px;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  padding: 40px;
  border: 10px solid grey;
  border-radius: 50px;
  margin-bottom: 50px;
`;

export const BioTitle = styled.h1`
  color: #fff;
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

export const BioDescription = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: #fff;
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
  position: absolute;
  top: 20px;
  right: 20px;
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
