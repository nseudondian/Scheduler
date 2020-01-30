import React, { Component } from 'react';
import data from './todoData'
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.css'



class Schedule extends Component {
    constructor(){
        super()
            this.state ={
                myData : data
            }

    }
    render() { 
        const newData = this.state.myData.map(
            items => <Todo
            target = {items.target}
            status = {items.status}
            key = {items.id}
            
            />
        )

        return ( 
            <div>
                {newData}
            </div>
         );
    }
}
 
export default Schedule;