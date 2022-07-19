import React, {Component} from 'react';
//EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

class App extends Component{
    constructor(props){
        super(props); //   super is used to call the parent constructor. super props would pass props to the parent constructor,From your example, super(props) would call the React. Component constructor passing in props as the argument
        this.state ={person:{}};
    }
}