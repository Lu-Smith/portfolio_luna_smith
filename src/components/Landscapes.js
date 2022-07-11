import React, { useState } from "react";
import Img1 from "../images/fineart/landscapes/Dragon.jpg";
import Img2 from "../images/fineart/landscapes/Autumn Reflection.jpg";
import Img3 from "../images/fineart/landscapes/Guardian Tree.jpg";
import Img4 from "../images/fineart/landscapes/Hawaiian Beach.jpg";
import Img5 from "../images/fineart/landscapes/Autumn Sunset.jpg";
import Img6 from "../images/fineart/landscapes/Icy River.jpg";
import Img7 from "../images/fineart/landscapes/Autumn.jpg";
import Img8 from "../images/fineart/landscapes/Grasslands of Arran.jpg";
import Img9 from "../images/fineart/landscapes/Great Canyon.jpg";
import Img10 from "../images/fineart/landscapes/Hello Highlands.jpg";
import Img11 from "../images/fineart/landscapes/Italian Alps.jpg";
import Img12 from "../images/fineart/landscapes/Melting Autumn Sunrise.jpg";
import Img13 from "../images/fineart/landscapes/Melting Blue Mountains.jpg";
import Img14 from "../images/fineart/landscapes/Mermaid Euphony.jpg";
import Img15 from "../images/fineart/landscapes/Morning Dream.jpg";
import Img16 from "../images/fineart/landscapes/Morning Muse.jpg";
import Img17 from "../images/fineart/landscapes/North Berwick.jpg";
import Img18 from "../images/fineart/landscapes/Paradise.jpg";
import Img19 from "../images/fineart/landscapes/Rocky Beach.jpg";
import Img20 from "../images/fineart/landscapes/Savannah Beach.jpg";
import Img21 from "../images/fineart/landscapes/Seaside Garden.jpg";
import Img22 from "../images/fineart/landscapes/Secret Garden.jpg";
import Img23 from "../images/fineart/landscapes/Shimmering Golden Trees.jpg";
import Img24 from "../images/fineart/landscapes/Snowy Mist.jpg";
import Img25 from "../images/fineart/landscapes/Snowy Mount Rainier.jpg";
import Img26 from "../images/fineart/landscapes/Snowy Mountain.jpg";
import Img27 from "../images/fineart/landscapes/Storm Wave.jpg";
import Img28 from "../images/fineart/landscapes/Sunrise at Elgol Beach.jpg";
import Img29 from "../images/fineart/landscapes/Sunset at North Berwick.jpg";
import Img30 from "../images/fineart/landscapes/Winter Breeze.jpg";
import Img31 from "../images/fineart/landscapes/Sunset at North Berwick.jpg";
import Img32 from "../images/fineart/landscapes/The First Walk.jpg";
import Img33 from "../images/fineart/landscapes/The Frigid Whisper of Diabaig.jpg";
import Img34 from "../images/fineart/landscapes/The Hum of the Hollow.jpg";
import Img35 from "../images/fineart/landscapes/The Song of Glen Etive.jpg";
import Img36 from "../images/fineart/landscapes/Trapped in the Silent Wind.jpg";
import Img37 from "../images/fineart/landscapes/Viking Sunset.jpg";
import Img38 from "../images/fineart/landscapes/Waterfall.jpg";
import Img39 from "../images/fineart/landscapes/When Winter meets Summer.jpg";
import Img40 from "../images/fineart/landscapes/Winter at the Lake.jpg";
import Img41 from "../images/fineart/landscapes/Sunset at the Icy River.jpg";
import Img42 from "../images/fineart/landscapes/Winter Cottage.jpg";
import Img43 from "../images/fineart/landscapes/Work at Sunset.jpg";
import Img44 from "../images/fineart/landscapes/Winter in Woods.jpg";
import Img45 from "../images/fineart/landscapes/Winter Path.jpg";

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
} from "./styles/Landscapes.styled";

const LandscapePage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "Meri - Timeless Internal art - The Frigid Wishper of Diabaig Luna Smith",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "The Kiss of Mother's love in Luna Smith's art studio",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Blue whale by a Scottish artist Luna Smith",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 19,
      imgSrc: Img19,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 22,
      imgSrc: Img22,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 25,
      imgSrc: Img25,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 26,
      imgSrc: Img26,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 27,
      imgSrc: Img27,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 28,
      imgSrc: Img28,
      alt: "A Scottish artist Luna Smith",
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
    {
      id: 31,
      imgSrc: Img31,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 32,
      imgSrc: Img32,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 33,
      imgSrc: Img33,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 34,
      imgSrc: Img34,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 35,
      imgSrc: Img35,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 36,
      imgSrc: Img36,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 37,
      imgSrc: Img37,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 38,
      imgSrc: Img38,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 39,
      imgSrc: Img39,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 40,
      imgSrc: Img40,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 41,
      imgSrc: Img41,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 42,
      imgSrc: Img42,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 43,
      imgSrc: Img43,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 44,
      imgSrc: Img44,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 45,
      imgSrc: Img45,
      alt: "A Scottish artist Luna Smith",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <BioContainer>
        <BioTitle>Landscapes</BioTitle>
        <BioDescription>
          Precious moments enchanted in canvas to cultivate our own spiritual
          nature. We are the crucial part of the World. Paint your own path in
          the endless forest. Paint you own sunshine in the dark space.
        </BioDescription>
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

export default LandscapePage;
