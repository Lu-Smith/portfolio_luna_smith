import {
    Container,
    ButtonWrap,
    ContactButtonLink
    
  } from "./styles/ContactFooter.styled";


function ContactFooter() {
    return (
        <Container>
            <ButtonWrap>
            <ContactButtonLink
              to="contact"
              smooth="true"
              spy="true"
              duration={500}
              exact="true"
              offset={-100}
            >
              Contact me
            </ContactButtonLink>
            </ButtonWrap>
        </Container>
    )
}

export default ContactFooter;