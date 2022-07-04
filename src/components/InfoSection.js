import React from "react";
import { Button } from "./styles/Button.styled";
import ArtGallery from "./ArtGallery";
import ArtGalleryBg from "../images/ArtGallerybg.jpg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  MainDescription,
  Description,
  ArtGalleryWrap,
  MenuButton,
  MenuButtonLink,
} from "./styles/InfoSection.styled";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  primary,
  dark,
  dark2,
  buttonLabel,
  buttonLabelHome,
  alt,
  img,
  maindescription,
  more,
  sideId,
  slides,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <MenuButton>
                  <MenuButtonLink
                    to={more}
                    smooth="true"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-100}
                  >
                    {buttonLabel}
                  </MenuButtonLink>
                </MenuButton>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        <MainDescription
          lightBg={lightBg}
          id={sideId}
          style={{ backgroundImage: `url(${ArtGalleryBg})` }}
        >
          <Description>{maindescription}</Description>
          <ArtGalleryWrap>
            <ArtGallery slides={slides} />
          </ArtGalleryWrap>
          <BtnWrap>
            <Button
              to="home"
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
            >
              {buttonLabelHome}
            </Button>
          </BtnWrap>
        </MainDescription>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
