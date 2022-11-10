import ImgB1 from "../images/illustrations/books/ABClearningisfuncover.jpg";

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
      imgSrc: ImgB1,
      alt: "ABC learning is fun by Luna Smith",
      href: "https://www.amazon.co.uk/ABC-learning-fun-Luna-Smith-ebook/dp/B0BHX6NW3M",
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
          Learning is fun...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {charactersdata.map((item, index) => {
          return (
            <GalleryWrap key={index}>
              <a href={item.href} alt={item.alt}>
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ width: `100%` }}
                />
              Click here to buy
              </a>
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default CharactersPage;