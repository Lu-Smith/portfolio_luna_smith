import Img1 from "../images/fineart/nott/The Warrior of Shattered Tears by Luna Smith.jpg";
import Img2 from "../images/fineart/nott/Kiss of Mother's Love by Luna Smith.jpg";
import Img3 from "../images/fineart/nott/The Heartbeat of the Raging Cyclon  by Luna Smith.jpg";
import Img4 from "../images/fineart/nott/Awakening from the Sleep of Fear by Luna Smith.jpg";
import Img5 from "../images/fineart/nott/The Temple of Life by Luna Smith.jpg";
import Img6 from "../images/fineart/nott/A Scale of the Blue Dragon  by Luna Smith.jpg";
import Img7 from "../images/fineart/nott/Dreams of a Future Self by Luna Smith.jpg";
import Img8 from "../images/fineart/nott/Songs of the Burning Star by Luna Smith.jpg";
import Img9 from "../images/fineart/nott/Breathe of the Invisible Beast  by Luna Smith.jpg";
import Img10 from "../images/fineart/nott/The Battle of Endless Seas by Luna Smith.jpg";
import Img11 from "../images/fineart/nott/The Fading Reality by Luna Smith.jpg";
import Img12 from "../images/fineart/nott/The Flame of the Eternal Triangle by Luna Smith.jpg";
import Img13 from "../images/fineart/nott/The Soothing Wind of Longing by Luna Smith.jpg";
import Img14 from "../images/fineart/nott/The Blood of the Silent Unicorn  by Luna Smith.jpg";
import Img15 from "../images/fineart/nott/The Reflection of My Universe by Luna Smith.jpg";

import {
  Container,
  GalleryContainer,
  GalleryWrap,
  BioContainer,
  BioTitle,
  BioDescription,
  Icon,
  CloseIcon,
} from "./styles/Nott.styled";

const NottPage = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "The Warrior of Shattered Tears - a Scottish artist Luna Smith",
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Awakening from the Sleep of Fear - a Scottish artist Luna Smith",
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "The Heartbeat of the Raging Cyclone - a Scottish artist Luna Smith",
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "A Scale of the Blue Dragon - A Scottish artist Luna Smith",
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Songs of the Burning Star - A Scottish artist Luna Smith",
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "The Fading Reality - A Scottish artist Luna Smith",
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "The Battle of Endless Seas - A Scottish artist Luna Smith",
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "Dreams of a Future Self - A Scottish artist Luna Smith",
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "Breathe of the Invisible Beast  - A Scottish artist Luna Smith",
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "The Flame of the Eternal Triangle - A Scottish artist Luna Smith",
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "The Temple of Life - A Scottish artist Luna Smith",
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Kiss of Mother's Love - A Scottish artist Luna Smith",
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "The Blood of the Silent Unicorn - A Scottish artist Luna Smith",
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "The Soothing Wind of Longing - A Scottish artist Luna Smith",
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "The Reflection of My Universe - A Scottish artist Luna Smith",
    },
  ];

  return (
    <Container>
      <Icon to="/">
        <CloseIcon />
      </Icon>
      <BioContainer>
        <BioTitle>Nott</BioTitle>
        <BioDescription>
          Ancient worlds and the untouchable universe inspire the art pieces.
          Nott collection connects the past, the present and the future. When we
          dream, we reach our visions. We unite with the best versions of
          ourselves. 
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

export default NottPage;
