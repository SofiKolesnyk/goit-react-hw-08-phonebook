import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  box-shadow: var(--main-shadow);
  border-radius: 4px;
  background-color: #ffff;
  
`;

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
  text-transform: capitalize;
  flex-basis: 33.333%;
`;

export const Number = styled.span`
  text-align: right;
  font-weight: 400;
  font-size: 20px;
  color: var(--accent);
  text-shadow: var(--main-shadow);
  flex-basis: 33.333%;
`;

export const Btn = styled.button`
  max-width: 100px;
  padding: 5px 15px;
  flex-basis: 15%;
  font-size: 20px;
  font-weight: 400;
  color: var(--accent);
  border-radius: 5px;
  border: 1px solid var(--accent);
  box-shadow: var(--main-shadow);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }
`;