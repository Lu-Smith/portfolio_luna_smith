import ImgC1 from "../images/illustrations/comics/Knowledge is Power.jpg";
import ImgC2 from "../images/illustrations/comics/Meditation.jpg";
import ImgC3 from "../images/illustrations/comics/You are what you eat.jpg";

import {
  Container,
  GalleryContainer,
  DigitalArtContainer,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
  GalleryWrap
} from "./styles/DAComics.styled";

const ComicsPage = () => {
  let comicsdata = [
    {
      id: 1,
      imgSrc: ImgC3,
      alt: "You are what you eat, a funny cartoon strip by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgC2,
      alt: "Meditation, a funny cartoon strip by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgC1,
      alt: "Knowledge is Power, a funny cartoon by Luna Smith",
    }
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Mermaids</DigitalArtTitle>
        <DigitalArtDescription>
          Underwater kingdom ...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {comicsdata.map((item, index) => {
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

export default ComicsPage;