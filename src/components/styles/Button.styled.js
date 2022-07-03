import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 40px;
  background: ${({ primary }) => (primary ? `#FA9109` : `#010606`)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? `14px 38px` : `12px 20px`)};
  color: ${({ dark }) => (dark ? `#010606` : `#fff`)};
  font-size: ${({ fontBig }) => (fontBig ? `20px` : `16px`)};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? `#fff` : `#38598B`)};
  }
`;
