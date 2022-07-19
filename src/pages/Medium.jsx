import React, {Component} from 'react';

class BasicInfo extends Component{
    constructor(props){
        super(props);
        this.state ={
            person:{
                name:props.name,
                age:props.age,
                dateOfBirth:props.dateOfBirth, 
                ssn:props.ssn}

            }
        }
    render() {
        return(
        <div>
            <p>Name:{this.state.person.name}</p>
            <p> Age:{this.state.person.age}</p>
            <p>dateOfBirth:{this.state.person.dateOfBirth}</p>
            <p>ssn:{this.state.person.ssn}</p>
        </div>
        );
    }
    }
    export default BasicInfo;