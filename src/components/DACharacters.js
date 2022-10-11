import ImgC1 from "../images/illustrations/characters/Little Witch.png";
import ImgC2 from "../images/illustrations/characters/queen.png";
import ImgC3 from "../images/illustrations/characters/turtle.png";
import ImgC4 from "../images/illustrations/characters/zebra.png";
import ImgC5 from "../images/illustrations/characters/bunny.png";
import ImgC6 from "../images/illustrations/characters/giraffe.png";
import ImgC7 from "../images/illustrations/characters/jellyfish.png";
import ImgC8 from "../images/illustrations/characters/monkey.png";
import ImgC9 from "../images/illustrations/characters/owl.png";
import ImgC10 from "../images/illustrations/characters/puppy.png";
import ImgC11 from "../images/illustrations/characters/snake.png";
import ImgC12 from "../images/illustrations/characters/bee.png";
import ImgC13 from "../images/illustrations/characters/elephant.png";
import ImgC14 from "../images/illustrations/characters/elf2.png";
import ImgC15 from "../images/illustrations/characters/bird.png";
import ImgC16 from "../images/illustrations/characters/black cat.png";
import ImgC17 from "../images/illustrations/characters/halloween cat.png";
import ImgC18 from "../images/illustrations/characters/ghosts.png";
import ImgC19 from "../images/illustrations/characters/moles.png";

import {
  Container,
  GalleryContainer,
  DigitalArtContainer,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
  GalleryWrap
} from "./styles/DABackgrounds.styled";

const CharactersPage = () => {
  let charactersdata = [
    {
      id: 1,
      imgSrc: ImgC1,
      alt: "Little Witch - halloween cartoon character by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgC2,
      alt: "Queen cartoon character by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgC3,
      alt: "Turtle cartoon character by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgC4,
      alt: "Zebra cartoon character by Luna Smith",
    },
    {
      id: 5,
      imgSrc: ImgC5,
      alt: "Bunny cartoon character by Luna Smith",
    },
    {
      id: 6,
      imgSrc: ImgC6,
      alt: "Giraffe cartoon character by Luna Smith",
    },
    {
      id: 7,
      imgSrc: ImgC7,
      alt: "Jellyfish cartoon character by Luna Smith",
    },
    {
      id: 8,
      imgSrc: ImgC8,
      alt: "Monkey cartoon character by Luna Smith",
    },
    {
      id: 9,
      imgSrc: ImgC9,
      alt: "Owl cartoon character by Luna Smith",
    },
    {
      id: 10,
      imgSrc: ImgC10,
      alt: "Puppy cartoon character by Luna Smith",
    },
    {
      id: 11,
      imgSrc: ImgC11,
      alt: "Snake cartoon character by Luna Smith",
    },
    {
      id: 12,
      imgSrc: ImgC12,
      alt: "Bee cartoon character by Luna Smith",
    },
    {
      id: 13,
      imgSrc: ImgC13,
      alt: "Elephant cartoon character by Luna Smith",
    },
    {
      id: 14,
      imgSrc: ImgC14,
      alt: "Elf cartoon character by Luna Smith",
    },
    {
      id: 15,
      imgSrc: ImgC15,
      alt: "Bird cartoon character by Luna Smith",
    },
    {
      id: 16,
      imgSrc: ImgC16,
      alt: "Halloween black cat cartoon character by Luna Smith",
    },
    {
      id: 17,
      imgSrc: ImgC17,
      alt: "Halloween black cat cartoon character by Luna Smith",
    },
    {
      id: 18,
      imgSrc: ImgC18,
      alt: "Ghosts cartoon character by Luna Smith",
    },
    {
      id: 19,
      imgSrc: ImgC19,
      alt: "Moles cartoon character by Luna Smith",
    },
    
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Characters</DigitalArtTitle>
        <DigitalArtDescription>
          Look ...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {charactersdata.map((item, index) => {
          return (
            <GalleryWrap key={index}>
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `100%` }}
                />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default CharactersPage;