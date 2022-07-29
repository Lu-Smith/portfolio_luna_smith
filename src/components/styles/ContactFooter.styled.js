import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  padding: 60px;
text-align: center;
`;


export const ButtonWrap = styled.div`
  align-items: center;

`;

export const ContactButtonLink = styled(LinkR)`
   border-radius: 40px;
  background: radial-gradient(circle at 3% 4.8%, #d404fa 0%, #fa0421 86.6%);
  color: white;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #04ecc4;
    color: #010606;
  }
`;
