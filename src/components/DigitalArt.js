import ImgW1 from "../images/illustrations/sunset by Luna Smith.jpg";
import ImgW3 from "../images/illustrations/day by Luna Smith.jpg";
import ImgW2 from "../images/illustrations/sunrise by Luna Smith.jpg";
import ImgW4 from "../images/illustrations/snow by Luna Smith.jpg";
import ImgW5 from "../images/illustrations/day clouds by Luna Smith.jpg";
import ImgW6 from "../images/illustrations/galaxy by Luna Smith.jpg";
import ImgW7 from "../images/illustrations/thunder by Luna Smith.jpg";
import ImgW8 from "../images/illustrations/night by Luna Smith.jpg";
import ImgWE1 from "../images/illustrations/weatheremojis/broken clouds by Luna Smith.png";
import ImgWE2 from "../images/illustrations/weatheremojis/clouds by Luna Smith.png";
import ImgWE3 from "../images/illustrations/weatheremojis/light rain by Luna Smith.png";
import ImgWE4 from "../images/illustrations/weatheremojis/mist by Luna Smith.png";
import ImgWE5 from "../images/illustrations/weatheremojis/moon by Luna Smith.png";
import ImgWE6 from "../images/illustrations/weatheremojis/partly sunny by Luna Smith.png";
import ImgWE7 from "../images/illustrations/weatheremojis/rain by Luna Smith.png";
import ImgWE8 from "../images/illustrations/weatheremojis/sun by Luna Smith.png";
import ImgWE9 from "../images/illustrations/weatheremojis/smoke by Luna Smith.png";
import ImgWE10 from "../images/illustrations/weatheremojis/snow by Luna Smith.png";
import ImgWE11 from "../images/illustrations/weatheremojis/sunny by Luna Smith.png";
import ImgWE12 from "../images/illustrations/weatheremojis/sand by Luna Smith.png";
import ImgWE13 from "../images/illustrations/weatheremojis/thunder by Luna Smith.png";
import ImgWE14 from "../images/illustrations/weatheremojis/tornado by Luna Smith.png";
import ImgWE15 from "../images/illustrations/weatheremojis/snowflake by Luna Smith.png";
import ImgWE16 from "../images/illustrations/weatheremojis/white snowflake by Luna Smith.png";
import ImgD1 from "../images/illustrations/dictionary/elf-reading.png";
import ImgD3 from "../images/illustrations/dictionary/owlreading.png";
import ImgD2 from "../images/illustrations/dictionary/turtlereading.png";
import ImgD4 from "../images/illustrations/dictionary/bookshellturtle.png";
import ImgM1 from "../images/illustrations/mermaids/KittyMermaid.jpg";
import ImgM3 from "../images/illustrations/mermaids/HedgeHogMermaid.jpg";
import ImgM2 from "../images/illustrations/mermaids/MonkeyMermaid.jpg";
import ImgM4 from "../images/illustrations/mermaids/PuppyMermaid.jpg";

import {
  Container,
  GalleryContainer,
  GalleryContainerEmojis,
  GalleryWrap,
  GalleryWrapEmojis,
  DigitalArtContainer,
  DigitalArtContainerEmojis,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
} from "./styles/DigitalArt.styled";

const DigitalArtPage = () => {
  let weatherdata = [
    {
      id: 1,
      imgSrc: ImgW1,
      alt: "Sunset by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgW2,
      alt: "Day by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgW3,
      alt: "Sunrise by Luna Smith",

      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgW4,
      alt: "Snow by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: ImgW5,
      alt: "Day Clouds by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgW6,
      alt: "Galaxy by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: ImgW7,
      alt: "Thunder by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgW8,
      alt: "Night by Luna Smith",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
  ];

  let weatheremojidata = [
    {
      id: 1,
      imgSrc: ImgWE1,
      alt: "Broken Clouds",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgWE3,
      alt: "Light Rain",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgWE2,
      alt: "Clouds",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 4,
      imgSrc: ImgWE4,
      alt: "Mist",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: ImgWE5,
      alt: "Sleepy Moon",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgWE6,
      alt: "Partly Sunny",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 7,
      imgSrc: ImgWE7,
      alt: "Rain",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 8,
      imgSrc: ImgWE8,
      alt: "Sun",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 9,
      imgSrc: ImgWE9,
      alt: "Smoke",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 10,
      imgSrc: ImgWE10,
      alt: "Snow",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 11,
      imgSrc: ImgWE11,
      alt: "Sun",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 12,
      imgSrc: ImgWE12,
      alt: "Sand",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 13,
      imgSrc: ImgWE13,
      alt: "Storm",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 14,
      imgSrc: ImgWE14,
      alt: "Tornado",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 15,
      imgSrc: ImgWE15,
      alt: "Blue Snowflake",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 16,
      imgSrc: ImgWE16,
      alt: "White Snowflake",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
  ];

  let dictionarydata = [
    {
      id: 1,
      imgSrc: ImgD1,
      alt: "Reading Elf",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgD3,
      alt: "Reading Owl",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgD2,
      alt: "Turtle holding a book",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 4,
      imgSrc: ImgD4,
      alt: "Turtle with book shell",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
  ];

  let mermaidsdata = [
    {
      id: 1,
      imgSrc: ImgM1,
      alt: "Gloria",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgM3,
      alt: "Barbara",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgM2,
      alt: "Max",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 4,
      imgSrc: ImgM4,
      alt: "Dave",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Digital Art - Weather Backgrounds</DigitalArtTitle>
        <DigitalArtDescription>
          Images designed for my{" "}
          <a
            href="https://weather-app-react-luna-smith.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather App
          </a>
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {weatherdata.map((item, index) => {
          return (
            <GalleryWrap key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `100%` }}
                />
                <h1>{item.alt}</h1>
              </a>
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
      <DigitalArtContainerEmojis>
        <DigitalArtTitle>Digital Art - Weather Emojis</DigitalArtTitle>
        <DigitalArtDescription>
          Emojis designed for my{" "}
          <a
            href="https://weather-app-react-luna-smith.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather App
          </a>
        </DigitalArtDescription>
      </DigitalArtContainerEmojis>
      <GalleryContainerEmojis>
        {weatheremojidata.map((item, index) => {
          return (
            <GalleryWrapEmojis key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{
                    width: `25%`,
                  }}
                />
                <h1>{item.alt}</h1>
              </a>
            </GalleryWrapEmojis>
          );
        })}
      </GalleryContainerEmojis>
      <DigitalArtContainerEmojis>
        <DigitalArtTitle>Digital Art - Reading</DigitalArtTitle>
        <DigitalArtDescription>
          Images designed for my{" "}
          <a
            href="https://luminous-dictionary-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dictionary App
          </a>
        </DigitalArtDescription>
      </DigitalArtContainerEmojis>
      <GalleryContainerEmojis>
        {dictionarydata.map((item, index) => {
          return (
            <GalleryWrapEmojis key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `70%` }}
                />
                <h1>{item.alt}</h1>
              </a>
            </GalleryWrapEmojis>
          );
        })}
      </GalleryContainerEmojis>
      <DigitalArtContainerEmojis>
        <DigitalArtTitle>Digital Art - Mermaids</DigitalArtTitle>
        <DigitalArtDescription>Cute Animal Baby Mermaids</DigitalArtDescription>
      </DigitalArtContainerEmojis>
      <GalleryContainerEmojis>
        {mermaidsdata.map((item, index) => {
          return (
            <GalleryWrapEmojis key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `70%` }}
                />
                <h1>{item.alt}</h1>
              </a>
            </GalleryWrapEmojis>
          );
        })}
      </GalleryContainerEmojis>
    </Container>
  );
};

export default DigitalArtPage;
