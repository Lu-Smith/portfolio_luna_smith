import ImgC4 from "../images/illustrations/characters/zebra.png";

import {
  Container,
  GalleryContainer,
  DigitalArtContainer,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
  GalleryWrap
} from "./styles/DABackgrounds.styled";

const CharactersPage = () => {
  let charactersdata = [
    {
      id: 1,
      imgSrc: ImgC4,
      alt: "Zebra cartoon character by Luna Smith",
    }
    
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Books</DigitalArtTitle>
        <DigitalArtDescription>
          Coming Soon...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {charactersdata.map((item, index) => {
          return (
            <GalleryWrap key={index}>
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `100%` }}
                />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default CharactersPage;