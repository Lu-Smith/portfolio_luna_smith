import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


export const Container = styled.div`
  background: #c3195d; 
`;

export const DigitalArtContainer = styled.div`
  background: #680747; 
  width: 40%;
  height: 200px;
  padding: 50px;
  margin: 0 auto;
  @media screen and (max-width:1200px) {
    width: 60%;
  }
  @media screen and (max-width:820px) {
    padding: 20px;
    height: 150px;
    width: 70%;
  }
  @media screen and (max-width:600px) {
    padding: 10px;
    height: 120px;
    width: 95%;
  }
`
export const DigitalArtTitle = styled.h1`
  color: white;
  opacity: 90%;
  font-size: 38px;
  text-align: center;
  @media screen and (max-width: 786px) {
    margin-top: 15px;
    font-size: 24px;
  }
`;

export const DigitalArtDescription = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: white;
  opacity: 70%;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 600px;
  font-family: "Poiret One", cursive;
  font-style: italic;
  @media screen and (max-width: 786px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const GalleryContainer = styled.div`
  background: #141010; 
  width: 80%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1100px) {
    width: 90%;
    padding: 30px;
  }

  @media screen and (max-width: 820px) {
    width: 95%;
    padding: 0 5px;
    flex-direction: column;
  }
`;

export const ButtonImage = styled(Link)`
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 4px solid white;
  background: #c3195d; 
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  @media screen and (max-width:786px) {
    border-radius: 15px;
    border: 2px solid white;
  }
  @media screen and (max-width:786px) {
    margin: 15px auto;
  }
`;

export const Image = styled.img`
  padding: 20px;
  border-radius: 20px;
  width: 400px;
  height: 300px;
  object-fit: contain;
  @media screen and (max-width:1120px) {
    width: 300px;
    height: 250px;
  }
  @media screen and (max-width:820px) {
    width: 360px;
    height: 200px;
    padding: 10px;
  }
  @media screen and (max-width:620px) {
    width: 300px;
    height: 150px;
    padding: 5px;
  }
  @media screen and (max-width: 400px) {
    width: 220px;
    height: 120px;
    padding: 10px;
  }
`;

export const TitleImage = styled.div`
  color: white;
  padding-bottom: 20px;
  font-size: 30px;
  line-height: 35px;
  @media screen and (max-width:820px) {
    font-size: 20px;
    line-height: 25px;
    padding-bottom: 18px;
  }
  @media screen and (max-width:620px) {
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 8px;
  }
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: #51557e;
  font-weight: 700;
  font-size: 32px;
`;

export const CloseIcon = styled(FaTimes)`
  margin-left: 32px;
  margin-top: 52px;
  color: white;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
