import React, { useState } from "react";
import Img1 from "../images/artstudio/1.jpg";
import Img2 from "../images/artstudio/2.jpg";
import Img3 from "../images/artstudio/3.jpg";
import Img4 from "../images/artstudio/4.jpg";
import Img5 from "../images/artstudio/5.jpg";
import Img6 from "../images/artstudio/6.jpg";
import Img7 from "../images/artstudio/7.jpg";
import Img8 from "../images/artstudio/22.jpg";
import Img9 from "../images/artstudio/9.jpg";
import Img10 from "../images/artstudio/10.jpg";
import Img11 from "../images/artstudio/11.jpg";
import Img12 from "../images/artstudio/12.jpg";
import Img13 from "../images/artstudio/13.jpg";
import Img14 from "../images/artstudio/14.jpg";
import Img15 from "../images/artstudio/15.jpg";
import Img16 from "../images/artstudio/16.jpg";
import Img17 from "../images/artstudio/17.jpg";
import Img18 from "../images/artstudio/18.jpg";
import Img19 from "../images/artstudio/19.jpg";
import Img20 from "../images/artstudio/20.jpg";
import BioImg from "../images/BioLunaSmith.jpg";

import {
  Container,
  GalleryContainer,
  GalleryWrap,
  BioContainer,
  BioTitle,
  BioDescription,
  Icon,
  CloseIcon,
  CloseIconCloseUp
} from "./styles/Bio.styled";

const BioPage = () => {
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
  ];

const [model, setModel] = useState(false);
const [tempimgSrc, setTempimgSrc] = useState(``);
const getImg = (imgSrc) => {
  setTempimgSrc(imgSrc);
  setModel(true);
}

  return (
    <Container>
      <img src={BioImg} alt="Bio Luna Smith" />
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <BioContainer>
        <BioTitle>Bio</BioTitle>
        <BioDescription>
        I am Luna Smith, a professional artist from Edinburgh, Scotland. Ever since I was young, I had a deep love for nature and art. I spent countless hours drawing landscapes and birds, which eventually led me to win my first art competition in primary school. This early achievement inspired me to pursue my passion for art, despite many challenges and obstacles along the way.

<br />My travels and experiences living in various countries have greatly influenced my art. I gained valuable knowledge and inspiration from the diverse languages, cultures, customs, architecture, and natural environments I encountered. My travels have shaped my artistic vision and allowed me to develop a unique style that captures the essence of the world around me.

<br />I specialize in oil painting, which I fell in love with from the first brushstroke. I am captivated by the medium's thick and visible texture, which I believe reveals the artist's thoughts and emotions. My style is characterized by vigorous, loose brushstrokes blended with expressive finger-work. This technique allows me to not only capture the surface level of my subjects but also to paint their soul.

<br />My works are highly sought after by collectors worldwide. I have two permanent exhibitions, one in Italy and one in China, and I had a solo exhibition in Edinburgh. My paintings are known for their vibrant colors and expressive energy, which reflect my passion for life and art.

<br />Not only am I passionate about art, but I also have a deep interest in coding, Norse Mythology, and Celtic culture. I find inspiration in the stories and symbols of these ancient cultures and often incorporate them into my art. My love for these traditions is reflected in the themes and motifs of my paintings, which are often rich in symbolism and meaning.

<br />One unique aspect of my artistic process is that I have synesthesia, which means that I can see music. This condition allows me to interpret sounds and translate them into visual images, which I then incorporate into my art. My current collection is a reflection of this unique ability, and I am currently working on a series of paintings that are inspired by various pieces of music.

<br />Through my art, I am able to express my passion for life, nature, and the rich cultural traditions of the world. My ability to capture the essence of the world around me in vibrant colors and expressive brushstrokes has made me a respected and sought-after artist. I am proud of my legacy as a talented Scottish painter, with a unique perspective on the world, which I am sure will endure for many years to come.
        </BioDescription>
        <BioTitle className="events">Events</BioTitle>
        <BioDescription>
          <div>
            <div className="title">
              Solo exhibition at St Margaret House in Edinburgh, Scotland
            </div>
            <div className="date">2023, 10 March - 22 March </div>
            <div>
              Join us for the solo exhibition of fine art artist Luna Smith,
              where her unique and bold style comes to life on canvas. Known for
              her use of her fingers and strong visible brushstrokes, Smith's
              work showcases her mastery of color and texture. This exhibition
              offers a rare opportunity to witness the artist's creative process
              firsthand and to experience the emotion and energy imbued in each
              piece. Don't miss this chance to see the work of one of the most
              exciting emerging artists of our time.
            </div>
          </div>
          <div>
            <div className="title">
              SSA 130 YEARS | ANNUAL EXHIBITION in Edinburgh, Scotland
            </div>
            <div className="date">2022/2023, 17 December - 10 January</div>
            <div>
              "130th anniversary of the inaugural Society of Scottish Artists
              exhibition. To celebrate, we are taking a unique look at its
              vibrant history, and showcasing a selection of works that have
              contributed to Scotland’s artistic culture. "<br />
              Luna Smith's artworks: Celtic Tale and Cute Little Things are part
              of this exhibition and available for sale in a 30x30cm section.
            </div>
          </div>
          <div>
            <div className="title">
              Timeless Immortal Art in China: TIA-Huangshan
            </div>
            <div className="date">permament exhibition, from 2022</div>
            <div>
              TIA-Huangshan gives immortality to artist with their works as
              testimonials of the streets of the town forever. An unprecedented
              combination of toponymy and art; Luna Smith's six artworks: The
              Guardian Tree, Diabaig, Italian Alps, Shimmering Golden Trees,
              Owl, and the Lonely Dragon have there a permanent home.
            </div>
          </div>
          <div>
            <div className="title">
              MERÍ TIMELESS IMMORTAL ART - Sicily, Italy
            </div>
            <div className="date">permament exhibition, from 2021</div>
            <div>
              Merì (Sicily) - Timeless Immortal Art", the revolution of the
              small town that becomes an eternal open-air museum, giving
              immortality to 60 artists from all the nations of the world. A
              message for the future that fascinates all countries of the world.
              Luna Smith's Daibaig painting is part of this wonderful project.
            </div>
          </div>
        </BioDescription>
      </BioContainer>
      <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} alt=""/>
        <CloseIconCloseUp onClick={() => setModel(false)} />
      </div>
      <GalleryContainer>
        {data.map((item, index) => {
          return (
            <GalleryWrap key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt={item.alt} style={{ width: `100%` }} />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default BioPage;
