import ImgW1 from "../images/illustrations/sunset by Luna Smith.jpg";
import ImgP12 from "../images/illustrations/portraits/Halloween portrait by Luna Smith - 12.jpg";
import ImgC3 from "../images/illustrations/comics/You are what you eat.jpg";
import ImgC1 from "../images/illustrations/characters/Little Witch.png";
import ImgI1 from "../images/illustrations/items/xylophone.png";
import ImgB1 from "../images/illustrations/characters/zebra.png";


import {
  Container,
  GalleryContainer,
  DigitalArtContainer,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
  ButtonImage,
  Image,
  TitleImage
} from "./styles/DigitalArt.styled";

const DigitalArtPage = () => {
  
  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Digital Art</DigitalArtTitle>
        <DigitalArtDescription>
          Beautiful illutrations created with love.
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        <div>
        <ButtonImage to="/dabackgrounds">
          <Image src={ImgW1} alt="backgrounds created by Luna Smith, sunset"/>
          <TitleImage>Backgrounds</TitleImage>
         </ButtonImage>
         <ButtonImage to="/dacharacters">
          <Image src={ImgC1} alt="cartoon characters created by Luna Smith"/>
          <TitleImage>Characters</TitleImage>
         </ButtonImage>
         <ButtonImage to="/dacomics">
          <Image src={ImgC3} alt="comics created by Luna Smith"/>
          <TitleImage>Comics</TitleImage>
         </ButtonImage>
        </div>
        <div>
        <ButtonImage to="/daportraits">
          <Image src={ImgP12} alt="digital art,portraits created by Luna Smith"/>
          <TitleImage>Portraits</TitleImage>
         </ButtonImage>
         <ButtonImage to="/daitems">
          <Image src={ImgI1} alt="random items illustrations created by Luna Smith"/>
          <TitleImage>Items</TitleImage>
         </ButtonImage>
         <ButtonImage to="/dabooks">
          <Image src={ImgB1} alt="books illustrated by Luna Smith"/>
          <TitleImage>Books</TitleImage>
         </ButtonImage>
        </div>
      </GalleryContainer>
    </Container>
  );
};

export default DigitalArtPage;
