import React from "react";
import ContactComponent from "./contactComponent/ContactComponent";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
} from "./styles/Contact.styled";

const ContactPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Take me home</Icon>
          <FormContent>
            <ContactComponent />
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactPage;
