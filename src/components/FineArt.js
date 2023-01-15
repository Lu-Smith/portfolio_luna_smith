import React, { useState } from "react";
import Icon1 from "../images/The Guardian Tree.jpg";
import Icon2 from "../images/Dreams of Sorrow.jpg";
import Icon3 from "../images/The Warrior of Shattered Tears.jpg";
import Icon4 from "../images/Owl.jpg";

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
  ShopBtnLink 
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
              <PaintingsIcon src={Icon1} alt="The Guardian Tree, an oil painting by Luna Smith"/>
              <PaintingsH2>Landscapes</PaintingsH2>
              <PaintingsP>Oil paintings on canvas</PaintingsP>
            </MenuButtonLink>
          </MenuButton>
        </PaintingsCard>
        <PaintingsCard>
          <MenuButton>
            <MenuButtonLink
              to="/abstracts"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-100}
            >
              <PaintingsIcon src={Icon2} alt="Dreams of Sorrow, an oil painting by Luna Smith"/>
              <PaintingsH2>Abstracts</PaintingsH2>
              <PaintingsP>Oil paintings on canvas</PaintingsP>
            </MenuButtonLink>
          </MenuButton>
        </PaintingsCard>
        <PaintingsCard>
          <MenuButton>
            <MenuButtonLink
              to="/nott"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-100}
            >
              <PaintingsIcon src={Icon3} alt="The Warrior of Shattered Tears, an oil painitng by Luna Smith"/>
              <PaintingsH2>Nott</PaintingsH2>
              <PaintingsP>Oil paintings on canvas</PaintingsP>
            </MenuButtonLink>
          </MenuButton>
        </PaintingsCard>
        <PaintingsCard>
          <MenuButton>
            <MenuButtonLink
              to="/animals"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-100}
            >
              <PaintingsIcon src={Icon4} alr="Owl, an oil painting by Luna Smith" />
              <PaintingsH2>Animals</PaintingsH2>
              <PaintingsP>Oil paintings on canvas</PaintingsP>
            </MenuButtonLink>
          </MenuButton>
        </PaintingsCard>
      </PaintingsWrapper>
      <HomeBtnWrapper>
        <ShopBtnLink 
          href="//www.saatchiart.com/lunasmithart"
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          rel="noreferrer noopener"
        >
          Shop {hover ? <ArrowForward /> : <ArrowRight />}
        </ShopBtnLink >
      </HomeBtnWrapper>
    </PaintingsContainer>
  );
};

export default Paintings;
