import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const Container = styled(Form)`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  max-width: 50%;
  
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 20px;
  color: var(--text);
`; 

export const Input = styled(Field)`
  padding: 5px 10px;
  width: 100%;
  font-size: 20px;
  color: var(--primary);
  border: none;
  border-radius: 4px;
  box-shadow: var(--main-shadow);
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 5px;
  color: #f80a0a;
`;

export const Btn = styled.button`
  padding: 8px 24px;
  font-size: 20px;
  font-weight: 400;
  color: var(--accent);
  border-radius: 4px;
  border: 1px solid var(--accent);
  box-shadow: var(--main-shadow);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }
`;