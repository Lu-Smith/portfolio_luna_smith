import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/3.jpg";
import Img4 from "../images/4.jpg";
import Img5 from "../images/5.jpg";
import Img6 from "../images/6.jpg";
import Img7 from "../images/7.jpg";
import Img8 from "../images/8.jpg";
import Img9 from "../images/9.jpg";
import Img10 from "../images/10.jpg";
import Img11 from "../images/22.jpg";
import Img12 from "../images/12.jpg";
import Img13 from "../images/13.jpg";
import Img14 from "../images/14.jpg";
import Img15 from "../images/15.jpg";
import Img16 from "../images/16.jpg";
import Img17 from "../images/17.jpg";
import Img18 from "../images/18.jpg";
import Img19 from "../images/19.jpg";
import Img20 from "../images/20.jpg";
import Img21 from "../images/21.jpg";

import {
  Container,
  GalleryContainer,
  GalleryWrap,
  BioContainer,
  BioTitle,
  BioDescription,
  Icon,
  CloseIcon,
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
    {
      id: 21,
      imgSrc: Img21,
      alt: "A Scottish artist Luna Smith",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <BioContainer>
        <BioTitle>Bio</BioTitle>
        <BioDescription>
          My name is Luna Smith, and I am an established Scottish painter. My
          works are sold to collectors worldwide, including Australia, Belgium,
          Canada, Czech Republic, France, Germany, India, Ireland, Italy,
          Mexico, Norway, Portugal, Spain, Switzerland, the United Kingdom, and
          the United States.   I was born in Manchester, UK. My passion for art
          has been around since I was little. I often found myself in awe of the
          nature around me and would draw landscapes and birds for hours. Since
          winning my first art competition in primary school, I knew what I
          wanted to be. And even though many hardships and painful life
          experiences delayed me, I never lost sight of the path to my dreams. ​
          I have travelled a lot and lived in various countries. From these
          experiences, I have learned much from the languages, cultures,
          customs, architecture, and natural environments. And they inspire me
          in my work.   I am specialising in oils. With my first brushstroke, I
          had fallen in love with this medium. Its thick and visible texture is
          captivating and indeed reveals the artist’s thoughts. The struggle,
          the fun, and the energy that went into the painting are on full
          display. My unique style takes advantage of this and interprets the
          things I see and hear around me with vigorous loose brushstrokes
          blended with expressive finger work. It not only shows the surface
          level of the subject, but it also allows me to paint its soul.
        </BioDescription>
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

export default BioPage;
