import { jsdata, reactdata, alldata, animationsdata, gamesdata, phpdata } from './data/WebData';

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
  GamesProjects,
  JavaScriptProjects,
  ReactProjects,
  PHPProjects,
  AllProjects, 
  HomeButton,
} from "./styles/Web.styled";

const WebPage = () => {


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
        <GamesProjects
          to="gamesprojects"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-100}
        >
          Games
        </GamesProjects>
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
        <WebTitle id="gamesprojects">Games</WebTitle>
        <WebDescription>
          My projects coded with HTML, CSS, JavaScript, React.
        </WebDescription>
      </WebContainer>
      <GalleryContainer>
        {gamesdata.map((item, index) => {
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
