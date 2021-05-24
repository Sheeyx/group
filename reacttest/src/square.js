import React , {Component} from "react";

export default class Square extends Component {
    render(){
        const {value}=this.props
        return (
            <div className="square" key={value.id}>
                
                <img className="img" src={value.icon}></img>
                <h1>{value.text}</h1>
            </div>
        )
    }
}