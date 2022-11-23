import Img1 from "../images/web/1.jpg";
import Img3 from "../images/web/2.jpg";
import Img2 from "../images/web/3.jpg";
import Img4 from "../images/web/4.jpg";
import Img5 from "../images/web/5.jpg";
import Img6 from "../images/web/7.jpg";
import Img7 from "../images/web/6.jpg";
import Img8 from "../images/web/8.png";
import Img9 from "../images/web/9.png";
import Img10 from "../images/web/10.jpg";
import Img11 from "../images/web/11.jpg";
import Img12 from "../images/web/12.jpg";
import Img13 from "../images/web/13.jpg";
import Img14 from "../images/web/14.jpg";
import Img15 from "../images/web/15.jpg";
import Img16 from "../images/web/16.jpg";

import ImgR1 from "../images/web/1R.jpg";
import ImgR8 from "../images/web/2R.jpg";
import ImgR2 from "../images/web/3R.jpg";
import ImgR4 from "../images/web/4R.jpg";
import ImgR5 from "../images/web/5R.jpg";
import ImgR6 from "../images/web/6R.jpg";
import ImgR7 from "../images/web/7R.jpg";
import ImgR3 from "../images/web/8R.jpg";
import ImgR9 from "../images/web/9R.jpg";
import ImgR10 from "../images/web/10R.jpg";
import ImgR11 from "../images/web/11R.jpg";

import Img1PHP from "../images/web/1PHP.jpg";
import Img2PHP from "../images/web/2PHP.jpg";

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
  Header,
  AnimationsProjects,
  JavaScriptProjects,
  ReactProjects,
  PHPProjects,
  AllProjects, 
  HomeButton,
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
      alt: "Mandala Shapes",
      href: "https://mandala-shapes.netlify.app/",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Pixel Rain Images",
      href: "https://pixel-rain.netlify.app/",
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
      href: "https://canvas-project-js.netlify.app/",
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
    {
      id: 10,
      imgSrc: Img10,
      alt: "JS Animations",
      href: "https://js-animations-luna-smith.netlify.app/",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "JS Text Animations",
      href: "https://ephemeral-bienenstitch-24f392.netlify.app/",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Play with CANVAS",
      href: "https://multiple-canvases-js.netlify.app/",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "Just for FUN",
      href: "https://just-for-fun-js.netlify.app/",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "Matrix",
      href: "https://matrix-js.netlify.app/",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "Rock Paper Scissors",
      href: "https://rockpaperscissors-fun-game.netlify.app/",
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "Memory Game",
      href: "https://memory-game-crypto-coo.netlify.app/",
    }
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
      imgSrc: ImgR8,
      alt: "Quotes App",
      href: "https://quotes-app-luna-smith.netlify.app/",
    },
    {
      id: 3,
      imgSrc: ImgR3,
      alt: "Recipe App",
      href: "https://recipe-app-react-luna-smith.netlify.app/",
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
      alt: "Art World",
      href: "https://example-art-gallery.netlify.app/",
    },
    {
      id: 6,
      imgSrc: ImgR6,
      alt: "Bubble - community space",
      href: "https://community-fans.netlify.app/",
    },
    {
      id: 7,
      imgSrc: ImgR7,
      alt: "Quiz - React/Typescript",
      href: "https://react-typescript-quiz-luna-smith.netlify.app/",
    },
    {
      id: 8,
      imgSrc: ImgR2,
      alt: "Music App",
      href: "https://music-app-luna-smith.netlify.app/",
    },
    {
      id: 9,
      imgSrc: ImgR9,
      alt: "React TypeScript PawHub",
      href: "https://pawhub-react-typescript.netlify.app/",
    },
    {
      id: 10,
      imgSrc: ImgR10,
      alt: "Restaurant Reservations - TypeScript/Redux",
      href: "https://restaurant-reservation-order.netlify.app/",
    },
    {
      id: 11,
      imgSrc: ImgR11,
      alt: "Todo List - TypeScript/Redux",
      href: "https://todo-list-react-redux-typescript.netlify.app/",
    },
  ];
  let alldata = [
    {
      id: 1,
      imgSrc: ImgR4,
      alt: "Weather App",
      href: "https://weather-app-react-luna-smith.netlify.app/",
    },
    {
      id: 2,
      imgSrc: ImgR2,
      alt: "Music App",
      href: "https://music-app-luna-smith.netlify.app/",
    },
    {
      id: 3,
      imgSrc: Img10,
      alt: "JS Animations",
      href: "https://js-animations-luna-smith.netlify.app/",
    },
    {
      id: 4,
      imgSrc: ImgR7,
      alt: "Quiz",
      href: "https://react-typescript-quiz-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Pixel Rain Images",
      href: "https://pixel-rain.netlify.app/",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "SASS",
      href: "https://sass-my-first-website.netlify.app/",
    },
    {
      id: 7,
      imgSrc: Img11,
      alt: "JS Text Animations",
      href: "https://ephemeral-bienenstitch-24f392.netlify.app/",
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
    {
      id: 10,
      imgSrc: Img3,
      alt: "Weather App",
      href: "https://celadon-cobbler-675e8d.netlify.app/",
    },
    {
      id: 11,
      imgSrc: Img7,
      alt: "Follow me",
      href: "https://canvas-project-js.netlify.app/",
    },
    {
      id: 12,
      imgSrc: ImgR11,
      alt: "Todo List - TypeScript/Redux",
      href: "https://todo-list-react-redux-typescript.netlify.app/",
    },
    {
      id: 13,
      imgSrc: ImgR1,
      alt: "Dictionary App",
      href: "https://luminous-dictionary-app.netlify.app/",
    },
    {
      id: 14,
      imgSrc: ImgR8,
      alt: "Quotes App",
      href: "https://quotes-app-luna-smith.netlify.app/",
    },
    {
      id: 15,
      imgSrc: ImgR3,
      alt: "Recipe App",
      href: "https://recipe-app-react-luna-smith.netlify.app/",
    },
    {
      id: 16,
      imgSrc: Img1,
      alt: "My first website",
      href: "https://www.shecodes.io/workshops/shecodes-basics-57e94c3e-366c-4503-ab78-e964ad540d88/projects/812937",
    },
    {
      id: 17,
      imgSrc: ImgR6,
      alt: "Bubble - community space",
      href: "https://community-fans.netlify.app/",
    },
    {
      id: 18,
      imgSrc: ImgR5,
      alt: "Art World",
      href: "https://example-art-gallery.netlify.app/",
    },
    {
      id: 19,
      imgSrc: Img4,
      alt: "Mandala Shapes",
      href: "https://mandala-shapes.netlify.app/",
    },
    {
      id: 20,
      imgSrc: Img2,
      alt: "Rainbow Spikes",
      href: "https://rainbow-spikes-javascript-animation.netlify.app/",
    },
    {
      id: 21,
      imgSrc: ImgR9,
      alt: "React TypeScript PawHub",
      href: "https://pawhub-react-typescript.netlify.app/",
    },
    {
      id: 22,
      imgSrc: ImgR10,
      alt: "Restaurant Reservations - TypeScript/Redux",
      href: "https://restaurant-reservation-order.netlify.app/",
    },
    {
      id: 23,
      imgSrc: Img12,
      alt: "Play with CANVAS",
      href: "https://multiple-canvases-js.netlify.app/",
    },
    {
      id: 24,
      imgSrc: Img13,
      alt: "Just for FUN",
      href: "https://just-for-fun-js.netlify.app/",
    },
    {
      id: 25,
      imgSrc: Img14,
      alt: "Matrix",
      href: "https://matrix-js.netlify.app/",
    },
    {
      id: 26,
      imgSrc: Img15,
      alt: "Rock Paper Scissors",
      href: "https://rockpaperscissors-fun-game.netlify.app/",
    },
    {
      id: 26,
      imgSrc: Img16,
      alt: "Memory Game",
      href: "https://memory-game-crypto-coo.netlify.app/",
    },
    {
      id: 27,
      imgSrc: Img1PHP,
      alt: "Flash Cards",
      href: "https://flash-cards-php.herokuapp.com/index.php",
    },
    {
      id: 28,
      imgSrc: Img2PHP,
      alt: "Halloween pictures",
      href: "https://halloween-php.herokuapp.com/index.php",
    }
   
  ];
  let animationsdata = [
    {
      id: 1,
      imgSrc: Img2,
      alt: "Rainbow Spikes",

      href: "https://rainbow-spikes-javascript-animation.netlify.app/",
    },
    {
      id: 2,
      imgSrc: Img4,
      alt: "Mandala Shapes",
      href: "https://mandala-shapes.netlify.app/",
    },
    {
      id: 3,
      imgSrc: Img5,
      alt: "Pixel Rain Images",
      href: "https://pixel-rain.netlify.app/",
    },
    {
      id: 4,
      imgSrc: Img7,
      alt: "Follow me",
      href: "https://canvas-project-js.netlify.app/",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "JS Animations",
      href: "https://js-animations-luna-smith.netlify.app/",
    },
    {
      id: 5,
      imgSrc: Img11,
      alt: "JS Text Animations",
      href: "https://ephemeral-bienenstitch-24f392.netlify.app/",
    },
    {
      id: 6,
      imgSrc: Img12,
      alt: "Play with CANVAS",
      href: "https://multiple-canvases-js.netlify.app/",
    },
    {
      id: 7,
      imgSrc: Img14,
      alt: "Matrix",
      href: "https://matrix-js.netlify.app/",
    },
  ];
  let phpdata = [
    {
      id: 1,
      imgSrc: Img1PHP,
      alt: "Flash Cards",
      href: "https://flash-cards-php.herokuapp.com/index.php",
    },
    {
      id: 2,
      imgSrc: Img2PHP,
      alt: "Halloween pictures",
      href: "https://halloween-php.herokuapp.com/index.php",
    }
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <Header id="header">
        <AllProjects
         to="allprojects"
         smooth="true"
         duration={500}
         spy="true"
         exact="true"
         offset={-50}
         >
         All
        </AllProjects>
        <JavaScriptProjects
          to="jsprojects"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-100}
        >
          JavaScript
        </JavaScriptProjects>
        <ReactProjects
          to="reactprojects"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-100}
        >
          React
        </ReactProjects>
        <AnimationsProjects
          to="animationsprojects"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-100}
        >
          Animations
        </AnimationsProjects>
        <PHPProjects
          to="phpprojects"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-100}
        >
          PHP
        </PHPProjects>
      </Header>
      <GalleryContainer id="allprojects">
        {alldata.map((item, index) => {
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
      <HomeButton
       to="header"
       smooth="true"
       duration={500}
       spy="true"
       exact="true"
       offset={-100}
      >
        Scroll Up
      </HomeButton>
      <WebContainer style={{ backgroundImage: `url(${WebBg})` }}>
        <WebTitle id="reactprojects">React</WebTitle>
        <WebDescription>
          My projects coded with React, Styled Components, Redux, TypeScript, JavaScript, 
          HTML, CSS, Bootstrap, Photoshop, Visual Studio Code and GitHub.
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
      <HomeButton
       to="header"
       smooth="true"
       duration={500}
       spy="true"
       exact="true"
       offset={-100}
      >
        Scroll Up
      </HomeButton>
      <WebContainer style={{ backgroundImage: `url(${WebBg})` }}>
        <WebTitle id="jsprojects">JavaScript</WebTitle>
        <WebDescription>
          My projects coded with JavaScript, SASS, Angular, TypeScript, Canvas, HTML, CSS, Bootstrap, Flexbox, Photoshop, Visual
          Studio Code and GitHub.
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
      <HomeButton
       to="header"
       smooth="true"
       duration={500}
       spy="true"
       exact="true"
       offset={-100}
      >
        Scroll Up
      </HomeButton>
      <WebContainer style={{ backgroundImage: `url(${WebBg})` }}>
        <WebTitle id="animationsprojects">Animations</WebTitle>
        <WebDescription>
          My cool animations created with JavaScript and canvas.
        </WebDescription>
      </WebContainer>
      <GalleryContainer>
        {animationsdata.map((item, index) => {
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
      <HomeButton
       to="header"
       smooth="true"
       duration={500}
       spy="true"
       exact="true"
       offset={-100}
      >
        Scroll Up
      </HomeButton>
      <WebContainer style={{ backgroundImage: `url(${WebBg})` }}>
        <WebTitle id="phpprojects">PHP</WebTitle>
        <WebDescription>
          My projects coded with HTML, SASS and PHP.
        </WebDescription>
      </WebContainer>
      <GalleryContainer>
        {phpdata.map((item, index) => {
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
      <HomeButton
       to="header"
       smooth="true"
       duration={500}
       spy="true"
       exact="true"
       offset={-100}
      >
        Scroll Up
      </HomeButton>
    </Container>
  );
};

export default WebPage;
