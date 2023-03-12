import React, { useState } from "react";
import Video from "../videos/video.mp4";

import { Button } from "./styles/Button.styled";
import { Image } from "./styles/Image.styled";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
  ImageContainer,
  MainContainer,
} from "./styles/HomeSection.styled";

const HomeSection = () => {
  const [hover, setHover] = useState(false);
  const [changeImg, setChangeImg] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const changeImage = () => {
    setChangeImg(!changeImg);
  };
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <ImageContainer>
          <Image
            bg={changeImg}
            aria-label="Luna Smith, a Scottish painter from Edinburgh"
            onClick={changeImage}
          />
        </ImageContainer>
        <MainContainer>
          <HomeH1>
            Luna Smith is an artist, a web developer and an illustrator.
          </HomeH1>
          <HomeP>
            <div>
              <div className="title">
                Solo exhibition at St Margaret House in Edinburgh, Scotland
              </div>
              <div className="date">2023, 10 March - 22 March </div>
              <div>
                Join me at my solo exhibition. This art show offers a rare
                opportunity to see my painting collections in Edinburgh. From
                abstract to landscape, you can find yourself in art.
              </div>
            </div>
            Her original artworks take inspiration from sounds, Norse Mythology,
            Ancient Worlds, and nature. Regularly commissioned by private and
            commercial clients alike to create websites, illustrations and fine
            art - Luna's beautiful works are available as originals, prints and
            merchandise.
          </HomeP>
          <HomeP>
            <a
              href="https://luartgallery.com/"
              alt="LuArt Gallery website, a Scottish contemporary art"
              target="_blank"
              rel="noreferrer"
            >
              Visit LuArt Gallery to buy stunning fine art
            </a>
          </HomeP>
          <HomeBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="webdesigns"
              primary="true"
              dark="true"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-80}
            >
              My Projects {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </MainContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
