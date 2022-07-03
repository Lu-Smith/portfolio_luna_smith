import styled from "styled-components";

export const Image = styled.img`
  margin: 0 auto;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s ease-in-out;
  width: 300px;

  @media screen and (max-width: 1000px) {
    width: 250px;
  }
  @media screen and (max-width: 786px) {
    width: 200px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    border: ${({ primary }) => (primary ? `black` : `white`)};
  }
`;
