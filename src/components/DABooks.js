import ImgB1 from "../images/illustrations/books/ABClearningisfun cover by Luna Smith.jpg";
import ImgB2 from "../images/illustrations/books/Mistletoe cover by Luna Smith.jpg";

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
      buy: "Click here to buy"
    },
    {
      id: 2,
      imgSrc: ImgB2,
      alt: "Mistletoe by Luna Smith",
      href: "https://www.amazon.co.uk/ABC-learning-fun-Luna-Smith/dp/B0BJC2GVJ1/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
      buy: "Coming soon..."
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
              {item.buy}
              </a>
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default CharactersPage;