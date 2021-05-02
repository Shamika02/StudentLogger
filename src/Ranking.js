import React,{useContext} from 'react'
import {StudentContext} from "./App";
import Student from "./Student"

function Ranking() {
    const students=useContext(StudentContext);


    students.sort((a, b) => {
        return b.average - a.average;
    });

    return (
        <div>
            <h1>Rankings</h1>
            <ol>
            {students.map(student=>{
    
                return(
                <li>
                    {student.fname} {student.lname} average: {student.average}
                  </li>)
            })}</ol>
            
            
        </div>
    )
}

export default Ranking
