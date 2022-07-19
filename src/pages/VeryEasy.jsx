import React, {Component} from 'react';
//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

function iteratePeople(arr) {
    return arr.map((person) => {
      return <BasicInfo person={person} />
    }
    )
  }
  

export default class BasicInfo extends Component{
    render(){ //render method is responsible for describing the view to be rendered in the browser window
        return(iteratePeople(people)

//             <div> 
// <h1>{this.props.name}</h1>
// <h1>{this.props.number}</h1>
// <h1>{this.props.dateOfBirth}</h1>
// <h1>{this.props.ssn}</h1>
//             </div>
        );
    }
}