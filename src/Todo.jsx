import React, { Component } from 'react';



class Todo extends Component {
    
    render() { 
        return ( 
            <div>
                <h3>{this.props.target}</h3>
                <input type="checkbox" checked = {this.props.status}/>
            </div>
         );
    }
}
 
export default Todo;