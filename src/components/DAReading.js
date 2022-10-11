import ImgR1 from "../images/illustrations/dictionary/elf-reading.png";
import ImgR2 from "../images/illustrations/dictionary/owlreading.png";
import ImgR3 from "../images/illustrations/dictionary/turtlereading.png";
import ImgR4 from "../images/illustrations/dictionary/bookshellturtle.png";

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

const ReadingPage = () => {
  let readingdata = [
    {
      id: 1,
      imgSrc: ImgR1,
      alt: "Elf reading a book, cartoon character by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgR2,
      alt: "Owl reading a book, cartoon character by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgR3,
      alt: "Turtle holding a book, cartoon character by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgR4,
      alt: "Turtle with a book shell, cartoon character by Luna Smith",
    }
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Reading</DigitalArtTitle>
        <DigitalArtDescription>
          is fun ...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {readingdata.map((item, index) => {
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

export default ReadingPage;