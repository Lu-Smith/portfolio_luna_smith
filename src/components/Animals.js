import Img1 from "../images/fineart/animals/Blue Dino by Luna Smith.jpg";
import Img2 from "../images/fineart/animals/Hatching Baby Lizard by Luna Smith.jpg";
import Img3 from "../images/fineart/animals/Hatching Blue Dragon by Luna Smith.jpg";
import Img4 from "../images/fineart/animals/Hatching Baby Turtle by Luna Smith.jpg";
import Img5 from "../images/fineart/animals/Hatching Baby Turtle by Luna Smith.jpg";
import Img6 from "../images/fineart/animals/Hatching Cute Chick.jpg";
import Img7 from "../images/fineart/animals/Hatching Dinosaur by Luna Smith.jpg";
import Img8 from "../images/fineart/animals/Hatching Fire Dragon by Luna Smith.jpg";
import Img9 from "../images/fineart/animals/Hatching turtle by Luna Smith.jpg";
import Img10 from "../images/fineart/animals/Hatching Turtles by Luna Smith.jpg";
import Img11 from "../images/fineart/animals/Hatching White Snake by Luna Smith.jpg";
import Img12 from "../images/fineart/animals/Relax, the chick is hatching by Luna Smith.jpg";
import Img13 from "../images/fineart/animals/Owl by Luna Smith.jpg";
import Img14 from "../images/fineart/animals/Landing Swan by Luna Smith.jpg";
import Img15 from "../images/fineart/animals/Blue Whale by Luna Smith.jpg";
import Img16 from "../images/fineart/animals/Dream by Luna Smith.jpg";
import Img17 from "../images/fineart/animals/Pug by Luna Smith.jpg";
import Img18 from "../images/fineart/animals/Chihuahua by Luna Smith.jpg";
import Img19 from "../images/fineart/animals/Spring by Luna Smith.jpg";
import Img20 from "../images/fineart/animals/baby gorilla.jpg";
import Img21 from "../images/fineart/animals/KingKongbyLu.jpg";
import Img22 from "../images/fineart/animals/Save Gorillas by Luna Smith.jpg";
import Img23 from "../images/fineart/animals/whitekittybylunasmith.jpg";
import Img24 from "../images/fineart/animals/WhiteCatbyLu .jpg";
import Img25 from "../images/fineart/animals/Grumpy Cupid by Luna Smith.jpg";
import Img26 from "../images/fineart/animals/ChihuahuabyLu.jpg";
import Img27 from "../images/fineart/animals/ChichibyLu.jpg";
import Img28 from "../images/fineart/animals/Baby chihuahua by Luna Smith.jpg";

import {
  Container,
  GalleryContainer,
  GalleryWrap,
  BioContainer,
  BioTitle,
  BioDescription,
  Icon,
  CloseIcon,
} from "./styles/Animals.styled";

const AnimalsPage = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "Meri - Timeless Internal art - The Frigid Wishper of Diabaig Luna Smith",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "The Kiss of Mother's love in Luna Smith's art studio",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Blue whale by a Scottish artist Luna Smith",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 19,
      imgSrc: Img19,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 22,
      imgSrc: Img22,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 25,
      imgSrc: Img25,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 26,
      imgSrc: Img26,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 27,
      imgSrc: Img27,
      alt: "A Scottish artist Luna Smith",
    },
    {
      id: 28,
      imgSrc: Img28,
      alt: "A Scottish artist Luna Smith",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <BioContainer>
        <BioTitle>Animals</BioTitle>
        <BioDescription>
          Wilderness and beauty. Fluffiness and claws. A dangerous forever
          friend. Stay inspired.
        </BioDescription>
      </BioContainer>
      <GalleryContainer>
        {data.map((item, index) => {
          return (
            <GalleryWrap key={index}>
              <img src={item.imgSrc} alt={item.alt} style={{ width: `100%` }} />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default AnimalsPage;
