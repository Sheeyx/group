import React , {Component} from "react";

export default class Item extends Component {
    render(){
        const {value}=this.props
        return (
            <tr key={value.id}>
            <td><input type={value.type} /></td>
            <td>{value.name}</td>
                <td className="email">{value.email} 
                <i className="fa fa-pen" ></i> 
             </td>
             <td>{value.date}</td>
             <td>{value.record}</td>
             <td>{value.song}</td>
             <td>{value.location}</td>
             <td><div className={value.action}></div></td>
          </tr>
        )
    }
}