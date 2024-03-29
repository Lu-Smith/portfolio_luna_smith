import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 40px;
  background: ${({ primary }) => (primary ? `radial-gradient(circle at 50%, #547C86 10%, #000 86.6%)` : `#010606`)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? `14px 38px` : `12px 20px`)};
  color: ${({ dark }) => (dark ? `#fff` : `#fff`)};
  font-size: ${({ fontBig }) => (fontBig ? `20px` : `16px`)};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 2px #2d4059;
  max-height: 40px;

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
    background: ${({ primary }) => (primary ? `#010606` : `#dc2f2f`)};
  }

  @media screen and (max-width: 480px) {
    border-radius: 30px;
    font-size: ${({ fontBig }) => (fontBig ? `12px` : `10px`)};
    padding: ${({ big }) => (big ? `7px 19px` : `8px 10px`)};
    margin: 20px auto;
  }
`;
