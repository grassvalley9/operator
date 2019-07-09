import React from 'react';
import './styles.css';
const channels = [
  {
    name: 'Moncton',
    scheduled: false
  },
  {
    name: 'Quebec',
    scheduled: true
  },
   
  {
    name: 'Rimqouski',
    scheduled: false
  },
  {
    name: 'Ottowa',
    scheduled: false
  },
  {
    name: 'Toronto',
    scheduled: false
  },
  {
    name: 'Trois-Riveries',
    scheduled: false
  },
  {
    name: 'Sherebrooke',
    scheduled: true
  },
  
  {
    name: 'Sogueny',
    scheduled: false
  },
];
export default function Channels() {
  return (
  <div>
  Channels
    <div className='channels-section'>
	
    
      {channels.map(x => (
        <div className='channel-section'>
          {<div className={x.scheduled ? 'red-dot-show' : 'red-dot-hide'} />}
          <span>{x.name}</span>
        </div>
      ))}
    </div>
	</div>
   
  );
}