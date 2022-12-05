import Pic1 from "../../images/Curiosity by Luna Smith.jpg";
import Pic3 from "../../images/turtlereading.png";
import Pic2 from "../../images/WeatherAppReact.jpg";
import { ArtGalleryData } from "../data/ArtGalleryData";
import { IllustrationsData } from "../data/IllustrationsData";
import { WebDesignsData } from "../data/WebDesignsData";

export const homeObjOne = {
  id: `about`,
  sideId: `sound`,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: `About`,
  headline: `The artist who can see music 🎶`,
  description: `When I listen to music, every sound, every rhythm has a unique colour and texture. I see melody dancing, changing like the northern lights in the sky. My brushstrokes aspire to capture every note. `,
  buttonLabel: `Bio`,
  more: "/bio",
  buttonLabelHome: `Home`,
  imgStart: true,
  img: Pic1,
  alt: "art",
  dark: true,
  primary: true,
  darkText: false,
  maindescription: `Sound of Life`,
  slides: ArtGalleryData,
  link: `/soundoflife`
};

export const homeObjTwo = {
  id: `webdesigns`,
  sideId: `projects`,
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: `Web Designs`,
  headline: `Web Developer`,
  description: `I started coding SheCodes where I completed various courses including SheCodes React. I
  worked on interesting and challenging projects with HTML, CSS, JavaScript, TypeScript, Canvas, React, Redux, Styled
  Components, Bootstrap, Flexbox, Responsive websites, PHP, Visual Studio Code, Sandbox, API, GitHub and Agile Methodologies, and Hosting. I am enjoying coding, problem-solving, animations, and
  designing websites. I am looking forward to collaboration with web developers and clients.`,
  buttonLabel: `More`,
  more: `/web`,
  buttonLabelHome: `Home`,
  imgStart: true,
  img: Pic2,
  alt: "web designs",
  dark: false,
  primary: false,
  darkText: true,
  maindescription: `My Projects`,
  slides: WebDesignsData,
  link: `/web`
};

export const homeObjThree = {
  id: `illustrations`,
  sideId: `digital`,
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: `Art Gallery`,
  headline: `Illustrations`,
  description: `I create amazing illustrations for websites, posters, videos and books. I am using Photoshop and Adobe Premiere for digital art.`,
  buttonLabel: `More`,
  more: `/digitalart`,
  buttonLabelHome: `Home`,
  imgStart: true,
  img: Pic3,
  alt: "art",
  dark: false,
  primary: false,
  darkText: true,
  maindescription: `Digital art`,
  slides: IllustrationsData,
  link: `/digitalart`
};
