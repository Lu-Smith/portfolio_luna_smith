import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 40px;
  background: ${({ primary }) => (primary ? `#dc2f2f` : `#010606`)};
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
  box-shadow: 0 4px 2px #d404fa;
  max-height: 40px;

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
    background: ${({ primary }) => (primary ? `#010606` : `#dc2f2f`)};
  }

  @media screen and (max-width: 480px) {
    border-radius: 30px;
    font-size: ${({ fontBig }) => (fontBig ? `10px` : `8px`)};
    padding: ${({ big }) => (big ? `7px 19px` : `6px 10px`)};
    margin: 20px auto;
  }
`;
