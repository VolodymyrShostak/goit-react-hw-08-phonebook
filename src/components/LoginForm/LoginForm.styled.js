import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  max-width: 1000px;
  background-color: #add8e6;
  margin: auto auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Form = styled.form`
  width: 320px;
  margin: auto;
  /* margin-top: 80px; */
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;

  flex-direction: column;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  height: 30px;
  border-radius: 10px;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-left: 110px;
  height: 35px;
  width: 100px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: orange;
  color: white;
  cursor: pointer;
`;
