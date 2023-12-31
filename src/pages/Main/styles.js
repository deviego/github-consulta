import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const ImgLogo = styled.img`
  width: 130px;
`;
export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  border-radius: 5px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${ (props) => props.theme.colors.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border: 1.75px solid ${(props) => props.theme.colors.gray400};
  transition:  0.3s;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.gray400 };

  &:hover {
    background: rgba(0, 0, 0, 0.8);  }
`;
