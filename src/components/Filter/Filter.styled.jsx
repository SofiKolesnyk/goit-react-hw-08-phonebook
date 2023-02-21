import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 24px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: var(--primary);
  border: none;
  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;