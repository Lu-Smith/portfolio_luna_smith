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
                <a
                  href="https://www.edinburghpalette.co.uk/events/luna-smith-solo-exhibition/"
                  alt="Luna Smith - soloe exhibitin at Edinburgh Palette"
                  target="_blank"
                  rel="noreferrer"
                >
                  Solo exhibition at St Margaret House in Edinburgh, Scotland
                </a>
              </div>
              <div className="date">10 March - 22 March, 2023</div>
              <div>
                Join me at my solo exhibition. This art show offers a rare
                opportunity to see my painting collections in Edinburgh. From
                abstract to landscape, you can find yourself in art.
                <br />
                <br />
              </div>
            </div>
            As an artist, I take inspiration from a variety of sources such as
            sounds, Norse Mythology, Ancient Worlds, and nature to create
            original artworks. My works are sought after by private and
            commercial clients alike who commission me to create websites,
            illustrations, and fine art pieces. I offer my beautiful works as
            originals, prints, and merchandise for anyone who appreciates the
            beauty and uniqueness of my creations.
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
              My Coding Projects {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="fineart"
              primary="true"
              dark="true"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-80}
            >
              My Art Projects {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </MainContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
