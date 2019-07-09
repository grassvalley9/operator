import React from 'react';
import './styles.js';
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
export default function AssetSection() {
  return (
     <div >
      

<Button >Asset/Live 1</Button><br/><br/>
<Button >Asset/Live 2</Button><br/><br/>
<Button >Asset/Live 3</Button><br/><br/>
<Button >Asset/Live 4</Button><br/><br/>
<Button >Asset/Live 5</Button><br/><br/>
<Button >FreeStyle</Button>

      
    </div>
  );
}