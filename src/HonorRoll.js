import React,{useContext} from 'react'
import {StudentContext} from "./App";

function HonorRoll() {
    let students=useContext(StudentContext);
    students=students.filter((student)=>student.average>=90)
    return (
        <div>
            <h1>Honor Roll</h1>
            <p>Students with a 90 gpa or higher</p>
            <ul>
            {students.map(student=>{
    
                return(
                <li>
                    {student.fname} {student.lname} 
                  </li>)
            })}</ul>
            


        </div>
    )
}

export default HonorRoll
