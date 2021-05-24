import React , {Component} from "react";

export default class Circle extends Component {
    render(){
        const {value}=this.props
        return (
            <div className="circle" key={value.id}>
                
                <img className="img" src={value.icon}></img>
                <h1>{value.text}</h1>
            </div>
        )
    }
}