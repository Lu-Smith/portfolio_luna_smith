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
} from "./styles/DABooks.styled";

const CharactersPage = () => {
  let charactersdata = [
    {
      id: 1,
      imgSrc: ImgB1,
      alt: "ABC learning is fun by Luna Smith",
      href: "https://www.amazon.co.uk/ABC-learning-fun-Luna-Smith/dp/B0BJC2GVJ1/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
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
              <a href={item.href} alt={item.alt} target="_blank" rel="noreferrer">
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