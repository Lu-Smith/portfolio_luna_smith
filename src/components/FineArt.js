import React, { useState } from "react";
import Icon1 from "../images/The Guardian Tree.jpg";
import Icon2 from "../images/Dreams of Sorrow.jpg";
import Icon3 from "../images/The Warrior of Shattered Tears.jpg";
import Icon4 from "../images/Owl.jpg";
import { Button } from "./styles/Button.styled";

import {
  PaintingsContainer,
  PaintingsH1,
  PaintingsWrapper,
  PaintingsCard,
  PaintingsIcon,
  PaintingsP,
  PaintingsH2,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
  MenuButton,
  MenuButtonLink,
} from "./styles/FineArt.styled";

const Paintings = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <PaintingsContainer id="fineart">
      <PaintingsH1>Fine Art</PaintingsH1>
      <PaintingsWrapper>
        <PaintingsCard>
          <MenuButton>
            <MenuButtonLink
              to="/landscapes"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-100}
            >
              <PaintingsIcon src={Icon1} />
              <PaintingsH2>Landscapes</PaintingsH2>
              <PaintingsP>Oil paintings on canvas</PaintingsP>
            </MenuButtonLink>
          </MenuButton>
        </PaintingsCard>
        <PaintingsCard>
          <PaintingsIcon src={Icon2} />
          <PaintingsH2>Abstracts</PaintingsH2>
          <PaintingsP>Oil paintings on canvas</PaintingsP>
        </PaintingsCard>
        <PaintingsCard>
          <PaintingsIcon src={Icon3} />
          <PaintingsH2>Nott</PaintingsH2>
          <PaintingsP>Oil paintings on canvas</PaintingsP>
        </PaintingsCard>
        <PaintingsCard>
          <PaintingsIcon src={Icon4} />
          <PaintingsH2>Animals</PaintingsH2>
          <PaintingsP>Oil paintings on canvas</PaintingsP>
        </PaintingsCard>
      </PaintingsWrapper>
      <HomeBtnWrapper>
        <Button
          to="home"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-80}
        >
          More {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HomeBtnWrapper>
    </PaintingsContainer>
  );
};

export default Paintings;
