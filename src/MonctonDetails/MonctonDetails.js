import React, { Component } from "react";
//import { moctonDetailsMockData } from './mockData';
import './styles.css';
import styled from 'styled-components';
//import Table from 'rc-table';
//import { Table } from 'antd';
//import 'antd/dist/antd.css';
//import 'rc-table/assets/index.css';


var selecteddata=[];
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 10px;
  border-radius: 2px;
  color: palevioletred;
  border: 2px solid palevioletblack;
  margin: 0 1em;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
const columns1 = [
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Time',
    dataIndex: 'address',
  },
];
 const Table = styled.table`
width: 100%;
margin-left:-30px;
margin-right:-30px;
border-spacing: 10px;
border-collapse: collapse;
overflow: auto;
`;

const TableHead = styled.thead`
font-size: 4vh;
font-weight: bold;
text-align: left;
padding: 2;

`;

const TableData = styled.td`
font-size: 3vh;
border-right: 2px solid black;
height: 100%;
font-size: 3vh;
width:600px;
text-align:left;
padding:10px;
vertical-align: middle;

`;

const TableDataGrey = styled.td`
font-size: 3vh;
width:200px;
text-align:left;
border-right: 2px solid black;
vertical-align: middle;

`;
const TableDatarow = styled.tr`
font-size: 3vh;
background-color:#ddd;
border-right: 2px solid black;
text-align: center;
vertical-align: middle;

`;

const Tbody=styled.tbody` 
    height: 500px;
    display: inline-block;
	
	margin-left:2%;
    margin-right:10%;
    width: auto;
    overflow: auto;
	border: 2px solid black;
	
`;
const data1 = [
  {
   Id:0,
    time: '00:10:00:00',
    address: ' 00:10:00:00' ,
    description: 'Comercial 1 pepsi',
  },
 
    {Id:1, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:2, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:3,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:5, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:5, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:6,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:7, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:8,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:9,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:10,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:11, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:12, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:13,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
	
    { Id:14,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:15,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:16,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:17,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:18, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:19, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:20, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:21, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:22, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:23, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:24,id:1,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:25, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:26, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
	
];

class MonctonDetails extends Component {
	 constructor(props){
	  selecteddata=[];
    super(props);
	
this.Delete = this.Delete.bind(this);
this.CUE = this.CUE.bind(this);
this.HOLD = this.HOLD.bind(this);
this.TAKE = this.TAKE.bind(this);	
	   
	 }
	
  Delete(Courses){
	 
	    if(selecteddata!=undefined){
		  
	    for(var i=0;i<Courses.length;i++)
	  {

	  if(Courses[i].id==selecteddata.id){
		
		  Courses.splice(i,1);
		  break ;
	  }
	  
	  }
	    setTimeout(() => {
  this.setState({ data: Courses });
}, 1000);
	  
  }
	
  }
  CUE(Courses){
	 Courses.push(selecteddata);
	  
	  setTimeout(() => {
  this.setState({ data: Courses });
 
}, 1000);

  }
  HOLD(event){
	  alert("HOLD")
  }
  TAKE(event){
	  alert("TAKE")
  }
  User(user){
	  selecteddata=user;
	  //alert("User"+user)
  }
  render() {
	    this.setState.data=data1;
		console.log("selecteddata"+JSON.stringify(  this.setState.data));
    return (
	 <div >
      
       
     <Table id="Courses" >
  
    <Tbody >
      
      {  this.setState.data.map(userdata => 
	  <div className="myborder">
        <tr1  id="user" onClick={(user) => this.User(userdata)}>
          <td className="tabletd" >{userdata.time}</td>
          <td className="tabletd1">{userdata.description}</td>
          <td className="tabletd">{userdata.address}</td>
        
        </tr1 >
		</div>
       )}
    </Tbody>
	 
	
	</Table>
	  <div className='controller-section'>
        
			<table className='button-table-section'>
			<tr>
			<td className='left'>
			
			<Button style={{backgroundColor:"red"}} id="delete" onClick={(Courses) => this.Delete(data1)} >Delete</Button>
			</td>
			<td className='right'>
			
			<Button onClick={(event) => this.CUE(data1)}>CUE</Button>
			<Button   onClick={(event) => this.HOLD(event)}>HOLD</Button>
			<Button onClick={(event) => this.TAKE(event)}>TAKE</Button>
			
			</td>
			</tr>
          </table>
		  
       
	   
	</div>
    </div>
    );
  }
}


export default MonctonDetails;