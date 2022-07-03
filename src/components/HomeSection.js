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

const HomeSection = (src) => {
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
            src={changeImg}
            onClick={changeImage}
            alt="Portfolio Luna Smith"
          />
        </ImageContainer>
        <MainContainer>
          <HomeH1>
            Luna Smith is an artist, a web developer and illustrator.
          </HomeH1>
          <HomeP>
            Her original artworks take inspiration from sounds, Norse Mythology,
            Ancient Worlds, and nature. Regularly commissioned by private and
            commercial clients alike to create websites, illustrations and fine
            art - Luna's beautiful works are available as originals, prints and
            merchandise.
          </HomeP>
          <HomeBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="projects"
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
