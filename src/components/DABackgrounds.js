import ImgW1 from "../images/illustrations/sunset by Luna Smith.jpg";
import ImgW2 from "../images/illustrations/sunrise by Luna Smith.jpg";
import ImgW3 from "../images/illustrations/day by Luna Smith.jpg";
import ImgW4 from "../images/illustrations/snow by Luna Smith.jpg";
import ImgW5 from "../images/illustrations/day clouds by Luna Smith.jpg";
import ImgW6 from "../images/illustrations/galaxy by Luna Smith.jpg";
import ImgW7 from "../images/illustrations/thunder by Luna Smith.jpg";
import ImgW8 from "../images/illustrations/night by Luna Smith.jpg";
import ImgW9 from "../images/illustrations/Halloween background 1.jpg";
import ImgW10 from "../images/illustrations/Halloween background 2.jpg";
import ImgW11 from "../images/illustrations/Black and White landscape1.jpg";
import ImgV1 from "../images/illustrations/videos/AutumnScene.mp4";
import ImgV2 from "../images/illustrations/autumn scene 2.jpg";

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

const BackgroundsPage = () => {
  let weatherdata = [
    {
      id: 1,
      imgSrc: ImgW11,
      alt: "Black and White background, desert by Luna Smith"
    },
    {
      id: 2,
      imgSrc: ImgW1,
      alt: "Sunset background by Luna Smith"
    },
    {
      id: 3,
      imgSrc: ImgW3,
      alt: "Sunrise background by Luna Smith"
    },
    {
      id: 4,
      imgSrc: ImgW4,
      alt: "Snow background by Luna Smith"
    },
    {
      id: 5,
      imgSrc: ImgW2,
      alt: "Day background by Luna Smith"
    },
    {
      id: 6,
      imgSrc: ImgW6,
      alt: "Galaxy background by Luna Smith"
    },
    {
      id: 7,
      imgSrc: ImgW7,
      alt: "Thunder background by Luna Smith"
    },
    {
      id: 8,
      imgSrc: ImgW8,
      alt: "Night background by Luna Smith"
    },
    {
      id: 8,
      imgSrc: ImgW5,
      alt: "Day clouds background by Luna Smith"
    },
    {
      id: 9,
      imgSrc: ImgW9,
      alt: "Halloween background by Luna Smith"
    },
    {
      id: 10,
      imgSrc: ImgW10,
      alt: "Halloween background by Luna Smith"
    },
    {
      id: 11,
      imgSrc: ImgV2,
      alt: "Autumn Scene, a woman in a red dress with an umbrella - background by Luna Smith"
    },
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Backgrounds</DigitalArtTitle>
        <DigitalArtDescription>
          Enjoy the moment...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {weatherdata.map((item, index) => {
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
        <video src={ImgV1} style={{ width: `50%` }} alt="autumn scenery" controls/>
      </GalleryContainer>
    </Container>
  );
};

export default BackgroundsPage;