import React from 'react'
import './appStyle.css'
import { data } from './data';
import { data1 } from './data1';
import { data2 } from './data2';
import { data3 } from './data3';
import Item from './item';
import Item2 from './item2';
import Square from './square';
import Circle from './circle';


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
              {data.map((value)=><Item value={value}/>)}
              {data1.map((value)=><Square value={value}/>)}
              {data2.map((value)=><Item2 value={value}/>)}
              {data3.map((value)=><Circle value={value}/>)}
            </div>

            
      )}
  }


export {App};