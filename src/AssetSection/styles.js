import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  margin: 0 10em;
  padding: 10px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;