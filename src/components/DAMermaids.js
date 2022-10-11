import ImgM1 from "../images/illustrations/mermaids/HedgeHogMermaid.jpg";
import ImgM2 from "../images/illustrations/mermaids/KittyMermaid.jpg";
import ImgM3 from "../images/illustrations/mermaids/MonkeyMermaid.jpg";
import ImgM4 from "../images/illustrations/mermaids/PuppyMermaid.jpg";

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

const MermaidsPage = () => {
  let mermaidsdata = [
    {
      id: 1,
      imgSrc: ImgM1,
      alt: "Hedgehog Mermaid, cartoon character by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgM2,
      alt: "Kitty Mermaid, cartoon character by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgM3,
      alt: "monkey Mermaid, cartoon character by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgM4,
      alt: "Puppy Mermaid, cartoon character by Luna Smith",
    }
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Mermaids</DigitalArtTitle>
        <DigitalArtDescription>
          Underwater kingdom ...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {mermaidsdata.map((item, index) => {
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

export default MermaidsPage;