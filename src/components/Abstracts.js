import React, { useState } from "react";
import Img1 from "../images/fineart/abstracts/B in Shadows by Luna Smith oil painting.jpg";
import Img2 from "../images/fineart/abstracts/G in Shadows by Luna Smith - oil painting.jpg";
import Img3 from "../images/fineart/abstracts/L in Shadows by Luna Smith - oil painting.jpg";
import Img4 from "../images/fineart/abstracts/Z in Shadows by Luna Smith - Scottish art.jpg";
import Img5 from "../images/fineart/abstracts/V in Shadows by Luna Smith - Scottish art.jpg";
import Img6 from "../images/fineart/abstracts/R in Shadows by Luna Smith - oil painting.jpg";
import Img7 from "../images/fineart/abstracts/O in Shadows by Luna Smith.jpg";
import Img8 from "../images/fineart/abstracts/M in Shadows by Luna Smith.jpg";
import Img9 from "../images/fineart/abstracts/J in Shadows by Luna Smith - oil painting.jpg";
import Img10 from "../images/fineart/abstracts/WomenNaturebyLu.jpg";
import Img11 from "../images/fineart/abstracts/Complex Void by Luna Smith.jpg";
import Img12 from "../images/fineart/abstracts/Edges of Joys by Luna Smith.jpg";
import Img13 from "../images/fineart/abstracts/Dreams of Sorrow by Luna Smith.jpg";
import Img14 from "../images/fineart/abstracts/Life Architect by Luna Smith.jpg";
import Img15 from "../images/fineart/abstracts/FlyingNaturebyLu.jpg";
import Img16 from "../images/fineart/abstracts/NewBeginingbyLu.jpg";
import Img17 from "../images/fineart/abstracts/OddyseybyLu.jpg";
import Img18 from "../images/fineart/abstracts/MischiefbyLu.jpg";
import Img19 from "../images/fineart/abstracts/Summer Breeze by Luna Smith.jpg";
import Img20 from "../images/fineart/abstracts/Winter Kiss by Luna Smith.jpg";
import Img21 from "../images/fineart/abstracts/Ocean Breeze by Luna Smith.jpg";
import Img22 from "../images/fineart/abstracts/Outside by Luna Smith.jpg";
import Img23 from "../images/fineart/abstracts/Inside by Luna Smith.jpg";
import Img24 from "../images/fineart/abstracts/PeacefulDaybyLu.jpg";
import Img25 from "../images/fineart/abstracts/InvisiblebyLu.jpg";
import Img26 from "../images/fineart/abstracts/LifeStorybyLU.jpg";
import Img27 from "../images/fineart/abstracts/Invisible2byLu.jpg";
import Img28 from "../images/fineart/abstracts/Invisible 1 by Luna Smith.jpg";
import Img29 from "../images/fineart/abstracts/Christmas by Luna Smith.jpg";
import Img30 from "../images/fineart/abstracts/ButterflyabstractbyLu.jpg";

import {
  Container,
  GalleryContainer,
  GalleryWrap,
  BioContainer,
  BioTitle,
  BioDescription,
  Icon,
  CloseIcon,
  ShopBtnLink,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./styles/Abstracts.styled";

const AbstractsPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "B in Shadows by Luna Smith oil painting",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "G in Shadows by Luna Smith - oil painting",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "L in Shadows by Luna Smith - oil painting",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Z in Shadows by Luna Smith - Scottish art",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "V in Shadows by Luna Smith - Scottish art",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "R in Shadows by Luna Smith - oil painting",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "O in Shadows by Luna Smith",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "M in Shadows by Luna Smith",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "J in Shadows by Luna Smith - oil painting",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "WomenNaturebyLu",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "Complex Void by Luna Smith",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Edges of Joys by Luna Smith",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "Dreams of Sorrow by Luna Smith",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "Life Architect by Luna Smith",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "FlyingNaturebyLu",
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "NewBeginingbyLu",
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "OddyseybyLu",
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "Summer Breeze by Luna Smith",
    },
    {
      id: 19,
      imgSrc: Img19,
      alt: "Winter Kiss by Luna Smith",
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "Ocean Breeze by Luna Smith",
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "Outside by laun Smith",
    },
    {
      id: 22,
      imgSrc: Img22,
      alt: "Inside by laun Smith",
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "PeacefulDaybyLu",
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "LifeStorybyLU",
    },
    {
      id: 25,
      imgSrc: Img25,
      alt: "InvisiblebyLu",
    },
    {
      id: 26,
      imgSrc: Img26,
      alt: "Invisible2byLu",
    },
    {
      id: 27,
      imgSrc: Img27,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 28,
      imgSrc: Img28,
      alt: "Invisible2byLu",
    },
    {
      id: 29,
      imgSrc: Img29,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 30,
      imgSrc: Img30,
      alt: "A Scottish artist Luna Smith",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <BioContainer>
        <BioTitle>Abstracts</BioTitle>
        <BioDescription>Find yourself in oil painting</BioDescription>
      
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
      </BioContainer>
      <GalleryContainer>
        {data.map((item, index) => {
          return (
            <GalleryWrap key={index}>
              <img src={item.imgSrc} alt={item.alt} style={{ width: `100%` }} />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default AbstractsPage;
