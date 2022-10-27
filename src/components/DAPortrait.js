import ImgP1 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 1.jpg";
import ImgP2 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 2.jpg";
import ImgP3 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 3.jpg";
import ImgP4 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 4.jpg";
import ImgP5 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 5.jpg";
import ImgP6 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 6.jpg";
import ImgP7 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 7.jpg";
import ImgP8 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 8.jpg";
import ImgP9 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 9.jpg";
import ImgP10 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 10.jpg";
import ImgP11 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 11.jpg";
import ImgP12 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 12.jpg";

import ImgV1 from "../images/illustrations/portraits/short Halloween 6.mp4";
import ImgV2 from "../images/illustrations/portraits/short Halloween 5.mp4";

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

const PortraitPage = () => {
  let videodata = [
    {
      id: 1,
      imgSrc: ImgV1,
      alt: "Halloween portraits video by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgV2,
      alt: "Halloween portraits video by Luna Smith",
    }
  ];
  let portraitdata = [
    {
      id: 1,
      imgSrc: ImgP1,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgP2,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgP3,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgP4,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 5,
      imgSrc: ImgP5,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 6,
      imgSrc: ImgP6,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 7,
      imgSrc: ImgP7,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 8,
      imgSrc: ImgP8,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 9,
      imgSrc: ImgP9,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 10,
      imgSrc: ImgP10,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 11,
      imgSrc: ImgP11,
      alt: "Halloween portrait by Luna Smith",
    },
    {
      id: 12,
      imgSrc: ImgP12,
      alt: "Halloween portrait by Luna Smith",
    }
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Portraits</DigitalArtTitle>
        <DigitalArtDescription>
          Halloween special...
        </DigitalArtDescription>
      </DigitalArtContainer>   
      <GalleryContainer>
        {videodata.map((item, index) => {
          return (
            <GalleryWrap key={index}>
                <video
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `100%` }}
                  controls
                />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>       
      <GalleryContainer>
        {portraitdata.map((item, index) => {
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

export default PortraitPage;