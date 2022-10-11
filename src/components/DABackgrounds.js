import ImgW1 from "../images/illustrations/sunset by Luna Smith.jpg";
import ImgW2 from "../images/illustrations/sunrise by Luna Smith.jpg";
import ImgW3 from "../images/illustrations/day by Luna Smith.jpg";
import ImgW4 from "../images/illustrations/snow by Luna Smith.jpg";
import ImgW5 from "../images/illustrations/day clouds by Luna Smith.jpg";
import ImgW6 from "../images/illustrations/galaxy by Luna Smith.jpg";
import ImgW7 from "../images/illustrations/thunder by Luna Smith.jpg";
import ImgW8 from "../images/illustrations/night by Luna Smith.jpg";



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
      imgSrc: ImgW1,
      alt: "Sunset",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgW2,
      alt: "Day",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgW3,
      alt: "Sunrise",

      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgW4,
      alt: "Snow",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: ImgW5,
      alt: "Day Clouds",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgW6,
      alt: "Galaxy",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: ImgW7,
      alt: "Thunder",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgW8,
      alt: "Night",
      href: "https://weather-app-react-luna-smith.netlify.app/",
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
      </GalleryContainer>
    </Container>
  );
};

export default BackgroundsPage;