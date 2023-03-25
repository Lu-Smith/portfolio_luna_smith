import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  background: #1d1d1b;
  padding: 40px;

  img {
    width: 50%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 786px) {
      width: 100%;
  }
  }
  
  .events {
    margin-top: 60px;
    background-color: #FA9109;
    padding: 5px;
  }

  /*model*/

  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }

  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  .model img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
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

  .title {
    font-weight: 600;
    margin: 40px 0 20px 0;
    color: #FA9109;
    font-size: 20px;
  }

  .date {
    color: #fff;
    opacity: 60%;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    border: 6px solid grey;
    border-radius: 30px;
    padding: 30px;
  }

  @media screen and (max-width: 480px) {
    border: 4px solid grey;
    border-radius: 20px;
    padding: 20px;
  }
`;

export const BioTitle = styled.h1`
  color: #fff;
  opacity: 60%;
  font-size: 38px;
  text-align: center;

  @media screen and (max-width: 786px) {
    margin-top: 14px;
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-top: 10px;
  }
`;

export const BioDescription = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  max-width: 600px;
  font-family: "Poiret One", cursive;
  font-style: italic;

  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
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

export const CloseIconCloseUp = styled(FaTimes)`
  color: #fff;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 2.5rem;
  height: 2.5rem;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }
`;
