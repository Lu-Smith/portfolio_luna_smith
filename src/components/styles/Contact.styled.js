import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(to top, #09203f 0%, #537895 100%);

  @media screen and (max-width: 480px) {
   max-width: 480px;
   margin: 0 auto;
}

  @media screen and (max-width: 360px) {
   max-width: 360px;
}
`;

export const FormWrap = styled.div`
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  &:hover {
    color: #35b6a0;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 6px;
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 40px;
    text-align: center;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
  }

  @media screen and (max-width: 360px) {
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  background: #010101 opacity(0.8);
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 42px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    margin-top: 200px;
    max-width: 400px;
  }

  @media screen and (max-width: 360px) {
    padding: 22px 12px;
    margin-top: 100px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 360px) {
    margin-bottom: 20px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 360px) {
    padding: 10px 10px;
    margin-bottom: 22px;
  }
`;

export const FormButton = styled.button`
  background: #cd7407;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #35b6a0;
    color: black;
  }

  @media screen and (max-width: 360px) {
    padding: 10px 0;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  height: 300px;
  font-size: 14px;
  line-height: 20px;
  padding: 10px;

  @media screen and (max-width: 360px) {
  height: 250px;
  font-size: 12px;
  line-height: 18px;
  }
`;



