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
import Img24 from "../images/fineart/abstracts/Growing up by Luna Smith.jpg";
import Img25 from "../images/fineart/abstracts/Fly Fly Fly by Luna Smith.jpg";
import Img26 from "../images/fineart/abstracts/PeacefulDaybyLu.jpg";
import Img27 from "../images/fineart/abstracts/ButterflyabstractbyLu.jpg";
import Img28 from "../images/fineart/abstracts/LifeStorybyLU.jpg";
import Img29 from "../images/fineart/abstracts/Christmas by Luna Smith.jpg";
import Img30 from "../images/fineart/abstracts/InvisiblebyLu.jpg";
import Img31 from "../images/fineart/abstracts/Invisible 1 by Luna Smith.jpg";
import Img32 from "../images/fineart/abstracts/Invisible2byLu.jpg";

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
  ArrowRight,
  CloseIconCloseUp
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
      alt: "B in Shadows",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "G in Shadows",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "L in Shadows",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Z in Shadows",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "V in Shadows",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "R in Shadows",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "O in Shadows",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "M in Shadows",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "J in Shadows",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "Women Nature",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "Complex Void",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Edges of Joys",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "Dreams of Sorrow",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "Life Architect",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "Flying Nature",
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "New Begining",
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "Oddysey",
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "Mischief",
    },
    {
      id: 19,
      imgSrc: Img19,
      alt: "Summer Kiss",
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "Winter Kiss",
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "Summer Breeze",
    },
    {
      id: 22,
      imgSrc: Img22,
      alt: "Outside",
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "Inside",
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "Growing Up",
    },
    {
      id: 25,
      imgSrc: Img25,
      alt: "Fly Fly Fly",
    },
    {
      id: 26,
      imgSrc: Img26,
      alt: "Peaceful Day",
    },
    {
      id: 27,
      imgSrc: Img27,
      alt: "Butterfly",
    },
    {
      id: 28,
      imgSrc: Img28,
      alt: "Life Story",
    },
    {
      id: 29,
      imgSrc: Img29,
      alt: "Xmas",
    },
    {
      id: 30,
      imgSrc: Img30,
      alt: "Invisible",
    },
    {
      id: 31,
      imgSrc: Img31,
      alt: "Invisible 2",
    },
    {
      id: 32,
      imgSrc: Img32,
      alt: "Invisible 3",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState(``);
  const [title, setTitle] = useState(``);
  const getImg = (imgSrc, alt) => {
    setTempimgSrc(imgSrc);
    setModel(true);
    setTitle(alt);
  }

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
      <div className={model? "model open" : "model"}>
      <img src={tempimgSrc} alt={title.alt}/>
        <h2>{title}</h2>
        <h3>Oil painting on canvas</h3>
        <CloseIconCloseUp onClick={() => setModel(false)} />
      </div>
      <GalleryContainer>
        {data.map((item, index) => {
          return (
            <GalleryWrap key={index} onClick={() => getImg(item.imgSrc, item.alt)}>
              <img src={item.imgSrc} alt={item.alt} style={{ width: `100%` }} />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default AbstractsPage;
