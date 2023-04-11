import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactBg from "../images/Contactbg.jpg";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  FormButton,
  FormInput,
  FormLabel,
  Form,
  FormH1,
  Confirmation,
  Textarea,
} from "./styles/Contact.styled";
import {
  HiddenMessage,
  Text,
} from "./styles/Header.styled";

const ContactPage = () => {
  const formId = `BgeyOVAq`;
  const fromSparkUrl = `https://submit-form.com/${formId}`;

  const [message, SetMessage] = useState("");

  const submitForm = () => {
    SetMessage("Thank you");
  };
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description"
              content="Contact Luna Smith."/>
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Container style={{ backgroundImage: `url(${ContactBg})` }}>
        <FormWrap>
          <Icon to="/">Take me home
          <HiddenMessage>
              <Text> Thank you</Text>
            </HiddenMessage>
          </Icon>
          <FormContent>
            <Form action={fromSparkUrl} onSubmit={submitForm}>
              <input type="hidden" name="_feedback.dark" value="true" />
              <input
                type="hidden"
                name="_feedback.success.title"
                value="Thank you! Have a wonderful day 🌞"
              />
              <FormH1>Get in touch</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" id="email" name="email" required="" />
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" name="name" id="name" required="" />
              <FormLabel htmlFor="for">Message</FormLabel>
              <Textarea name="message" id="message" required=""></Textarea>
              <FormButton type="submit">Send</FormButton>
              <Confirmation>{message}</Confirmation>;
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactPage;
