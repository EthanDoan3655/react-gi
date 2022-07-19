import React from "react";
import BasicInfo from "./Medium";

const BasicInfoList =() =>{
    const infoList =[
        {
            name:"ethan",
            age:"36",
            dateOfBirth:"09/26/2002",
            ssn:"1892684536"},
        {
            name:"Justin",
            age:"52",
            dateOfBirth:"09/26/1602",
            ssn:"1896894536"
        },
        {
            name:"john",
            age:"889",
            dateOfBirth:"09/26/1311",
            ssn:"1892683553" 
        },
        {
            name:"jebediah",
            age:"889",
            dateOfBirth:"09/26/1311",
            ssn:"1892683553" 
        },
        {
            name:"Joseph Lewis Thomas, known mononymously as Joe, is an American R&B singer",
            age:"Icons dont age",
            dateOfBirth:"06/05/1972",
            ssn:"000-00-0000" 
        }
    ];
        return (
            <div>
                {infoList.map((info)=>
                (<BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} ssn={info.ssn}/>))}
            </div>
        )
                }

export default BasicInfoList;