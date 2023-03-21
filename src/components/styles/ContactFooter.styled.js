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
  background: radial-gradient(circle at 3% 4.8%, #2d4059 0%, #dc2f2f 86.6%);
  color: white;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 5px 5px #2d4059;
  text-decoration: none;
  &:hover {
    background: #04ecc4;
    color: #010606;
    transform: translateY(5px);
    box-shadow: none;
  }
`;
