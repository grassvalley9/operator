import React, { Component } from "react";


import styled from 'styled-components';

import {
    
    Label,
    
} from './styles.js'

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
    border: 2px solid black;
  margin-left: 1px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

class ControlPoint extends Component {
	 constructor(props){
	  
    super(props);
	

	   
	 }
	
  
  render() {
    return (
	 <div>
	 <Label htmlFor='start'>Control Point</Label>
      <br />
     
    
      <Select>
       
		 
        <option value='HAL Studio'>HAL Studio</option>
        <option value='Les Sports'>Les Sports</option>
        <option value='Other Sports'>Other Sports</option>
        <option value='News'>News</option>
        <option value='Weather'>Weather</option>
        </Select>
    </div>
    );
  }
}


export default ControlPoint;