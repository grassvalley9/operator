import React from 'react';
import './styles.css';
import SourceSection from '../Source/SourceSection';
import AssetSection from '../AssetSection/AssetSection';
import styled from 'styled-components';
 
import Popup from "reactjs-popup";

var message=""
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;

  margin: 0 10em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

class InsertSection extends React.Component{
	constructor(props){
	  
    super(props);
	this.TakeClip = this.TakeClip.bind(this);
this.Takelive = this.Takelive.bind(this);
	
	   
	 }
	   
	 TakeClip(event){
		 
 
	  //alert("TakeClip")
  }
  Takelive(event){
	  alert("Takelive")
  }
	render() {
	return (
	<div>
		<div id="Insert" className='Insert-Section'>
		 
	<Popup id="Popuppos"  trigger={<Button onClick={(event) => this.TakeClip(event)}>Insert and Take Clip</Button>
     } position="top">
   <AssetSection/>
  </Popup>
      
      
     
    </div>
	<div className='Insert-Section1'>
		 
	
      <Popup  id="submit" trigger={ <Button onClick={(event) => this.Takelive(event)}>Insert and Take Live</Button>} position="top">
   <SourceSection/>
  </Popup>
      
       
    </div>
	</div>
	
	);
}
}


export default  InsertSection;