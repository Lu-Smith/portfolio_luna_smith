import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FormButton,
  FormInput,
  FormLabel,
  Form,
  FormH1,
  Text,
  Textarea,
} from "../styles/Contact.styled";

const Result = () => {
  return <p>Your message has been sent. I will contact you sonn</p>;
};

const ContactComponent = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tejrn2",
        "template_b8562im",
        form.current,
        "Ym8tOO_4MtfS6A6CA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.restet();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <Form ref={form} on Submit={sendEmail}>
      <FormH1>Get in touch</FormH1>
      <FormLabel htmlFor="for">Email</FormLabel>
      <FormInput type="email" name="email" required />
      <FormLabel htmlFor="for">Name</FormLabel>
      <FormInput type="text" name="name" required />
      <FormLabel htmlFor="for">Message</FormLabel>
      <Textarea name="message" required></Textarea>
      <FormButton type="submit">Send</FormButton>
      <Text>Have a great day 🌞</Text>
      <div> {result ? <Result /> : null}</div>
    </Form>
  );
};

export default ContactComponent;
