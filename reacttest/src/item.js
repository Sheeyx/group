import React , {Component} from "react";

export default class Item extends Component {
    render(){
        const {value}=this.props
        return (
            <div className="column" key={value.id}>
                 <img className="img1" src={value.icon}></img>
                <h1>{value.text}</h1>
            </div>
        )
    }
}