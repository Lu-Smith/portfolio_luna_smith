import Img1 from "../images/web/1.jpg";
import Img3 from "../images/web/2.jpg";
import Img2 from "../images/web/3.jpg";
import Img4 from "../images/web/4.jpg";
import Img5 from "../images/web/5.jpg";
import Img6 from "../images/web/7.jpg";
import Img7 from "../images/web/6.jpg";
import Img8 from "../images/web/8.png";
import Img9 from "../images/web/9.png";

import ImgR1 from "../images/web/1R.jpg";
import ImgR3 from "../images/web/2R.jpg";
import ImgR2 from "../images/web/3R.jpg";
import ImgR4 from "../images/web/4R.jpg";
import ImgR5 from "../images/web/5R.jpg";
import ImgR6 from "../images/web/6R.jpg";
import ImgR7 from "../images/web/7R.png";

import WebBg from "../images/Webbg.jpg";

import {
  Container,
  GalleryContainer,
  GalleryWrap,
  WebContainer,
  WebTitle,
  WebDescription,
  Icon,
  CloseIcon,
} from "./styles/Web.styled";

const WebPage = () => {
  let jsdata = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "My first website",
      href: "https://www.shecodes.io/workshops/shecodes-basics-57e94c3e-366c-4503-ab78-e964ad540d88/projects/812937",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Rainbow Spikes",

      href: "https://rainbow-spikes-javascript-animation.netlify.app/",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Weather App",
      href: "https://celadon-cobbler-675e8d.netlify.app/",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Text Animation",
      href: "https://code-letter-javascript-animation.netlify.app/",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Rainining Image",
      href: "https://magical-biscuit-4ef62b.netlify.app/",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "SASS",
      href: "https://sass-my-first-website.netlify.app/",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "Follow me",
      href: "https://follow-me-javascript-dots-animation.netlify.app/",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "Team Generator",
      href: "https://elaborate-caramel-f27ed1.netlify.app/",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "Example Shop",
      href: "https://resonant-mermaid-b21b5e.netlify.app/",
    },
  ];

  let reactdata = [
    {
      id: 1,
      imgSrc: ImgR1,
      alt: "Dictionary App",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgR3,
      alt: "Quotes App",
      href: "https://quotes-app-luna-smith.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgR2,
      alt: "Music App",
      href: "https://music-app-luna-smith.netlify.app/",
    },
    {
      id: 4,
      imgSrc: ImgR4,
      alt: "Weather App",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: ImgR5,
      alt: "Styled Component - Community",
      href: "https://community-fans.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgR6,
      alt: "Styled Component - Art Gallery",
      href: "https://example-art-gallery.netlify.app/",
    },
    {
      id: 7,
      imgSrc: ImgR7,
      alt: "Scroll Animations",
      href: "https://scroll-animation-react.netlify.app/",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <WebContainer style={{ backgroundImage: `url(${WebBg})` }}>
        <WebTitle>JavaScript</WebTitle>
        <WebDescription>
          My projects coded with JavaScript, SASS, Angular, TypeScript, Canvas, HTML, CSS, Visual
          Studio Code, GitHub , Bootstrap, Flexbox, Photoshop, Agile methodologies and hosted on
          Netlify.
        </WebDescription>
      </WebContainer>
      <GalleryContainer>
        {jsdata.map((item, index) => {
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
      <WebContainer style={{ backgroundImage: `url(${WebBg})` }}>
        <WebTitle>React</WebTitle>
        <WebDescription>
          My projects coded with React, Styled Components, JavaScript, Canvas,
          HTML, CSS, Visual Studio Code, GitHub , Bootstrap, Flexbox, Photoshop, Agile methodologies
          and hosted on Netlify.
        </WebDescription>
      </WebContainer>
      <GalleryContainer>
        {reactdata.map((item, index) => {
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
    </Container>
  );
};

export default WebPage;
