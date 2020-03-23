import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const AppTitle = styled.div`
  h1 {
    font-size: 24px;
    color: #333;
  }
  strong {
    font-size: 32px;
    font-weight: bold;
    color: #333;
  }
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 400px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0px;
  color: #333;
`;
export const TextInput = styled.input`
  background: #f5f5f5;
  padding: 20px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #393c4d;
  width: 100%;
  height: 10%;
  margin-bottom: 10px;
  :focus {
    border-color: #001427;
  }
  &::placeholder {
    color: #333;
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 14px;
  padding: 16px 0;
  margin: 5px 0px;
  width: 100%;
  background: #001427;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    opacity: 0.9;
  }
`;

export const LinkNewAccount = styled.a`
  font-size: 14px;
  align-self: center;
`;
