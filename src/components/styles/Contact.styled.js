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

  @media screen and (max-width: 600px) {
   min-height: 400px;
   margin: 0 auto;
}

  @media screen and (max-width: 480px) {
   max-width: 480px;
}

  @media screen and (max-width: 360px) {
   max-width: 360px;
}
`;

export const FormWrap = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 28px;

  &:hover {
    color: #35b6a0;
    div {
      display: flex;
      top: 80px;
      left: 90px;
    }
  }

  @media screen and (max-width: 1100px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 820px) {
    margin-top: 0;
    margin-left: 0;
    &:hover {
    div {
      display: flex;
      top: 50px;
      left: 40px;
    }
  }
  }

  @media screen and (max-width: 600px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
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
  background-color: rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 600px) {
    padding: 22px 22px;
    margin-top: 10px;
    max-width: 560px;
  }

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    margin-top: 20px;
    max-width: 300px;
  }

  @media screen and (max-width: 360px) {
    padding: 22px 12px;
    margin-top: 30px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
  }

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

  @media screen and (max-width: 600px) {
    padding: 14px 14px;
    max-width: 280px;
  }

  @media screen and (max-width: 360px) {
    padding: 12px 12px;
  }

  @media screen and (max-width: 360px) {
    padding: 10px 10px;
    margin-bottom: 22px;
  }
`;

export const FormButton = styled.button`
  border-radius: 40px;
  background: radial-gradient(circle at 50%, #547C86 10%, #000 86.6%);
  white-space: nowrap;
  padding: 14px 38px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  transition: 200ms all ease-in-out;
  box-shadow: 0 4px 2px #2d4059;
  max-height: 40px;
  width: 100%;

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
    background: #010606;
  }

  @media screen and (max-width: 480px) {
    border-radius: 30px;
    font-size: 12px;
    padding: 7px 19px;
    margin: 20px auto;
  }
`;


export const Confirmation = styled.span`
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

  @media screen and (max-width: 600px) {
  height: 250px;
  font-size: 13px;
  line-height: 18px;
  }

  @media screen and (max-width: 360px) {
  font-size: 12px;
  }
`;



