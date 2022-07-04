import styled from "styled-components";
import Portfolio from "../../images/portfolio.jpg";
import Portfolio1 from "../../images/8.jpg";
import PortfolioSmall from "../../images/portfoliosmall.jpg";
import Portfolio1Small from "../../images/8small.jpg";

export const Image = styled.img`
  background-image: url(${({ bg }) => (bg ? Portfolio : Portfolio1)});
  margin: 0 auto;
  border-radius: 20px;
  border: 2px solid white;
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
    background-image: url(${({ src }) =>(src ? PortfolioSmall : Portfolio1Small)});
    width: 200px;
    height: 250px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    border: ${({ primary }) => (primary ? `black` : `white`)};
  }
`;
