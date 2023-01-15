import styled from "styled-components";
import Portfolio from "../../images/portfolio.jpg";
import Portfolio1 from "../../images/artstudio/8.jpg";
import PortfolioSmall from "../../images/portfoliosmall.jpg";
import Portfolio1Small from "../../images/artstudio/8small.jpg";

export const Image = styled.div`
  background-image: url(${({ bg }) => (bg ? Portfolio1 : Portfolio)});
  border-radius: 20px;
  border: 2px solid white;
  margin: 0 auto;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s ease-in-out;
  width: 300px;
  height: 391px;

  @media screen and (max-width: 1000px) {
    width: 270px;
    height: 361px;
  }
  @media screen and (max-width: 786px) {
    background-image: url(${({ bg }) =>(bg  ? Portfolio1Small : PortfolioSmall)});
    width: 200px;
    height: 250px;
  }

  &:hover {
    border: 2px solid black;
  }
`;
