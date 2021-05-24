import React from 'react'
import './appStyle.css'
import { data } from './data';
import Item from './item';


class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        isActive:false
      }
    }
  
    render(){
      return (
        <div className='main'>
          <table>
          <tbody>
            <tr>
              <th><input type='checkbox'></input></th>
              <th>Name </th> 
              <th>Email</th>
              <th>Date</th>
              <th>Record</th>
              <th>Location</th>
              <th>Best Song</th>
              <th>Action</th>
            </tr>

              {
                data.map((value)=><Item value={value}/>) }   


          </tbody>
          
              
           
          </table>
        </div>
      );
    }
  }


export {App};