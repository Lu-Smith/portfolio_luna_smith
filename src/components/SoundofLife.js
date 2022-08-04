import React, { useState } from "react";
import Img1 from "../images/soundoflife/1.jpg";
import Img2 from "../images/soundoflife/2.jpg";
import Img3 from "../images/soundoflife/3.jpg";
import Img4 from "../images/soundoflife/4.jpg";
import Img5 from "../images/soundoflife/5.jpg";
import Img6 from "../images/soundoflife/6.jpg";
import Img7 from "../images/soundoflife/7.jpg";
import Img8 from "../images/soundoflife/8.jpg";
import Img9 from "../images/soundoflife/9.jpg";
import Img10 from "../images/soundoflife/10.jpg";
import Img11 from "../images/soundoflife/11.jpg";
import Img12 from "../images/soundoflife/12.jpg";
import Img13 from "../images/soundoflife/13.jpg";
import Img14 from "../images/soundoflife/14.jpg";
import Img15 from "../images/soundoflife/15.jpg";
import Img16 from "../images/soundoflife/16.jpg";
import Img17 from "../images/soundoflife/17.jpg";
import Img18 from "../images/soundoflife/18.jpg";
import Img19 from "../images/soundoflife/19.jpg";
import Img20 from "../images/soundoflife/20.jpg";
import Img21 from "../images/soundoflife/21.jpg";
import Img22 from "../images/soundoflife/22.jpg";
import Img23 from "../images/soundoflife/23.jpg";
import Img24 from "../images/soundoflife/24.jpg";
import Img25 from "../images/soundoflife/25.jpg";
import Img26 from "../images/soundoflife/26.jpg";
import Img27 from "../images/soundoflife/27.jpg";
import Img28 from "../images/soundoflife/28.jpg";
import Img29 from "../images/soundoflife/29.jpg";


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

const SoundofLifePage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "Sound of Life",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Saxophones",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Ballerina",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Mythical Violin",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Sunflowers",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "Dance with the Wind",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "Guitar",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "Norse Saga",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "Flamenco Dancer",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "Harp",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "Violins",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Muse",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "Duet",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "Warriors",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "Curiosity",
    },  {
      id: 16,
      imgSrc: Img16,
      alt: "Pianist",
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "Water Goddess",
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "Saxophone",
    },  {
      id: 19,
      imgSrc: Img19,
      alt: "Jazz",
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "Pastel Violin",
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "Dancer",
    },  {
      id: 22,
      imgSrc: Img22,
      alt: "Piano",
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "Violin",
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "Ice Dancer",
    },  {
      id: 25,
      imgSrc: Img25,
      alt: "Morning",
    },
    {
      id: 26,
      imgSrc: Img26,
      alt: "Fear",
    },
    {
      id: 27,
      imgSrc: Img27,
      alt: "Flute",
    },  {
      id: 28,
      imgSrc: Img28,
      alt: "Trumpet",
    },
    {
      id: 29,
      imgSrc: Img29,
      alt: "Jump",
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
        <BioTitle>Sound of Life</BioTitle>
        <BioDescription>
        When I listen to music, every sound, every rhythm has a unique colour and texture. I see melody dancing, changing like the northern lights in the sky. My brushstrokes aspire to capture every note.
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

export default SoundofLifePage;
