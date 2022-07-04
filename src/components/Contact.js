import React, { useState } from "react";
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
  Text,
  Textarea,
} from "./styles/Contact.styled";

const ContactPage = () => {
  const formId = `BgeyOVAq`;
  const fromSparkUrl = `https://submit-form.com/${formId}`;

  const [message, SetMessage] = useState("");

  const submitForm = () => {
    SetMessage("Thank you");
  };
  return (
    <>
      <Container style={{ backgroundImage: `url(${ContactBg})` }}>
        <FormWrap>
          <Icon to="/">Take me home</Icon>
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
              <Text>{message}</Text>;
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactPage;
