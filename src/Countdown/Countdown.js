import React from 'react';
import { ScreenContainer, HourList } from './styles'
export default function Countdown(props) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <HourList>
	   {props.timer}
	  </HourList>
       
     
    </div>
  );
}