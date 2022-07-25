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
import Img31 from "../images/fineart/landscapes/Winter Path.jpg";
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
      alt: "Lonely Dragon by Luna Smith",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Autumn Reflection",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Guardian Tree",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Hawaiian Beach",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Autumn Sunset",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "Icy River",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "Autmn",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "Grasslands of Arran",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "Great Canyon",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "Hello Highlands",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "Italian Alps",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Melting Autumn Sunrise",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "Melting Blue Mountains",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "Memaid Euphony",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "Morning Dream",
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "Morning Muse",
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "North Berwick",
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "Paradise",
    },
    {
      id: 19,
      imgSrc: Img19,
      alt: "Rocky Beach",
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "Savannah Beach",
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "Seaside Garden",
    },
    {
      id: 22,
      imgSrc: Img22,
      alt: "Secret Garden",
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "Shimmering Golden Trees",
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "Snowy Mist",
    },
    {
      id: 25,
      imgSrc: Img25,
      alt: "Snowy Mount Rainier",
    },
    {
      id: 26,
      imgSrc: Img26,
      alt: "Snowy Mountain",
    },
    {
      id: 27,
      imgSrc: Img27,
      alt: "Storm Wave",
    },
    {
      id: 28,
      imgSrc: Img28,
      alt: "Sunrise at Elgol Beach",
    },
    {
      id: 29,
      imgSrc: Img29,
      alt: "Sunset at North Berwick",
    },
    {
      id: 30,
      imgSrc: Img30,
      alt: "Winter Breeze",
    },
    {
      id: 31,
      imgSrc: Img31,
      alt: "Winter Path",
    },
    {
      id: 32,
      imgSrc: Img32,
      alt: "The First Walk",
    },
    {
      id: 33,
      imgSrc: Img33,
      alt: "The Frigid Whisper of Diabaig",
    },
    {
      id: 34,
      imgSrc: Img34,
      alt: "The Hum of the Hollow",
    },
    {
      id: 35,
      imgSrc: Img35,
      alt: "The Song of Glen Etive",
    },
    {
      id: 36,
      imgSrc: Img36,
      alt: "Trapped in the Silent Wind",
    },
    {
      id: 37,
      imgSrc: Img37,
      alt: "Viking Sunset",
    },
    {
      id: 38,
      imgSrc: Img38,
      alt: "Waterfall",
    },
    {
      id: 39,
      imgSrc: Img39,
      alt: "When Winter meets Summer",
    },
    {
      id: 40,
      imgSrc: Img40,
      alt: "Winter at the Lake",
    },
    {
      id: 41,
      imgSrc: Img41,
      alt: "Sunset at the Icy River",
    },
    {
      id: 42,
      imgSrc: Img42,
      alt: "Winter Cottage",
    },
    {
      id: 43,
      imgSrc: Img43,
      alt: "Work at Sunset",
    },
    {
      id: 44,
      imgSrc: Img44,
      alt: "Winter Woods",
    }
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

export default LandscapePage;
