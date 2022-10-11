import ImgE1 from "../images/illustrations/weatheremojis/broken clouds by Luna Smith.png";
import ImgE2 from "../images/illustrations/weatheremojis/clouds by Luna Smith.png";
import ImgE3 from "../images/illustrations/weatheremojis/light rain by Luna Smith.png";
import ImgE4 from "../images/illustrations/weatheremojis/mist by Luna Smith.png";
import ImgE5 from "../images/illustrations/weatheremojis/moon by Luna Smith.png";
import ImgE6 from "../images/illustrations/weatheremojis/partly sunny by Luna Smith.png";
import ImgE7 from "../images/illustrations/weatheremojis/rain by Luna Smith.png";
import ImgE8 from "../images/illustrations/weatheremojis/sun by Luna Smith.png";
import ImgE9 from "../images/illustrations/weatheremojis/smoke by Luna Smith.png";
import ImgE10 from "../images/illustrations/weatheremojis/snow by Luna Smith.png";
import ImgE11 from "../images/illustrations/weatheremojis/sunny by Luna Smith.png";
import ImgE12 from "../images/illustrations/weatheremojis/sand by Luna Smith.png";
import ImgE13 from "../images/illustrations/weatheremojis/thunder by Luna Smith.png";
import ImgE14 from "../images/illustrations/weatheremojis/tornado by Luna Smith.png";
import ImgE15 from "../images/illustrations/weatheremojis/snowflake by Luna Smith.png";
import ImgI1 from "../images/illustrations/items/fruits.png";
import ImgI2 from "../images/illustrations/items/things.png";
import ImgI3 from "../images/illustrations/items/things1.png";
import ImgI4 from "../images/illustrations/items/flower-part2.png";
import ImgI5 from "../images/illustrations/items/yoyo.png";
import ImgI6 from "../images/illustrations/items/rock.png";



import {
  Container,
  GalleryContainer,
  DigitalArtContainer,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
  GalleryWrap, 
  GalleryContainerEmoji
} from "./styles/DAItems.styled";

const EmojisPage = () => {
  let emojisdata = [
    {
      id: 1,
      imgSrc: ImgE1,
      alt: "broken clouds emoji by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgE2,
      alt: "clouds emoji by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgE3,
      alt: "light rain emoji by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgE4,
      alt: "mist emoji by Luna Smith",
    },
    {
      id: 5,
      imgSrc: ImgE5,
      alt: "moon emoji by Luna Smith",
    },
    {
      id: 6,
      imgSrc: ImgE6,
      alt: "partly sunny emoji by Luna Smith",
    },
    {
      id: 7,
      imgSrc: ImgE7,
      alt: "rain emoji by Luna Smith",
    },
    {
      id: 8,
      imgSrc: ImgE8,
      alt: "sun emoji by Luna Smith",
    },
    {
      id: 9,
      imgSrc: ImgE9,
      alt: "smoke emoji by Luna Smith",
    },
    {
      id: 10,
      imgSrc: ImgE10,
      alt: "snow emoji by Luna Smith",
    },
    {
      id: 11,
      imgSrc: ImgE11,
      alt: "sunny day emoji by Luna Smith",
    },
    {
      id: 12,
      imgSrc: ImgE12,
      alt: "sand emoji by Luna Smith",
    },
    {
      id: 13,
      imgSrc: ImgE13,
      alt: "thunder emoji by Luna Smith",
    },
    {
      id: 14,
      imgSrc: ImgE14,
      alt: "tornado emoji by Luna Smith",
    },
    {
      id: 15,
      imgSrc: ImgE15,
      alt: "snowflake emoji by Luna Smith",
    },
  ];

  let itemsdata = [
    {
      id: 1,
      imgSrc: ImgI1,
      alt: "fruits illustrations, an apple, a banana, a haloween pumpkin by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgI5,
      alt: "yoyo illustrations by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgI3,
      alt: "random things illustrations, a volcano, banana, an umbrella by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgI4,
      alt: "flower illustrations by Luna Smith",
    },
    {
      id: 5,
      imgSrc: ImgI2,
      alt: "random things illustrations, a leaf, a xylophone, an ice cream by Luna Smith",
    },
    {
      id: 6,
      imgSrc: ImgI6,
      alt: "rock illustrations by Luna Smith",
    },
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Random things</DigitalArtTitle>
        <DigitalArtDescription>
          Just for fun ...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {itemsdata.map((item, index) => {
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
      <GalleryContainerEmoji>
        {emojisdata.map((item, index) => {
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
      </GalleryContainerEmoji>
    </Container>
  );
};

export default EmojisPage;