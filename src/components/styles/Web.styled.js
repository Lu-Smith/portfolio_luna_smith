import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  background: #f5f9ee;
  padding: 40px;
`;

export const GalleryContainer = styled.div`
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-width: 25%;
  -moz-column-width: 25%;
  column-width: 25%;
  padding: 2px 100px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    padding: 0 10px;
  }
`;

export const WebContainer = styled.div`
  background-color: grey;
  max-width: 800px;
  text-align: center;
  justify-content: center;
  margin: 20px auto;
  padding: 40px;
  border: 2px solid #bea15b;
  border-radius: 50px;
  margin-bottom: 70px;
  margin-top: 140px;
  @media screen and (max-width: 820px) {
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

export const WebTitle = styled.h1`
  color: #fff;
  opacity: 70%;
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
  color: #fff;
  opacity: 90%;
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
  margin: 6%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-family: "Poiret One", cursive;
  }
  h1 {
    font-size: 19px;
    padding: 20px;
    background-color: #bea15b;
  }
  @media screen and (max-width: 786px) {
    h1 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 14px;
      padding: 15px;
    }
  }
  &:hover {
    filter: opacity(0.8);
    transform: scale(105%);
    box-shadow: none;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #bea15b;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #bea15b;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }
`;

export const Header = styled.div`
  margin: 20px 40px 60px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const JavaScriptProjects = styled(LinkS)`
padding: 10px 15px;
font-size: 26px;
border-radius: 20px;
cursor: pointer;
color: black;

&:hover {
  color: #bea15b;
}
`;

export const ReactProjects = styled(LinkS)`
font-size: 26px;
padding: 10px 15px;
border-radius: 20px;
cursor: pointer;
color: black;

&:hover {
  color: #bea15b;
}
`;

export const AllProjects = styled(LinkS)`
font-size: 26px;
padding: 10px 15px;
border-radius: 20px;
cursor: pointer;
color: black;

&:hover {
  color: #bea15b;
}
`;

export const AnimationsProjects = styled(LinkS)`
font-size: 26px;
padding: 10px 15px;
border-radius: 20px;
cursor: pointer;
color: black;

&:hover {
  color: #bea15b;
}
`;

export const PHPProjects = styled(LinkS)`
font-size: 26px;
padding: 10px 15px;
border-radius: 20px;
cursor: pointer;
color: black;

&:hover {
  color: #bea15b;
}
`;

export const HomeButton = styled(LinkS)`
text-align: center;
margin: 0 auto;
display: block;
margin-top: 50px;
background-color:  #bea15b;
width: 20%;
font-size: 26px;
padding: 10px 15px;
border-radius: 20px;
cursor: pointer;
color: white;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
transition: all 200ms ease-in-out;

&:hover {
  color: #bea15b;
  background-color: white;
  box-shadow: none;
  transform: translateY(5px);
}
`;