import React, {useState} from 'react';
import axios from 'axios';




function Student({fname, lname, testGrades, tutored, timesPerWeek, setStudents}) {


  function handleDelete(){
      
      axios.delete(`http://localhost:5000/${lname}`)
          .then(res=>setStudents(res.data));
  }
    

  return (

    <div>
        
        
        <p>First Name: {fname}</p>
        <p>Last Name: {lname}</p>
        <p>testGrades: {testGrades[0]},{testGrades[1]},{testGrades[2]},{testGrades[3]},{testGrades[4]}</p>
        <p>Tutoring: {tutored.toString()}</p>
        <p>Sessions Per Week: {timesPerWeek}</p>
        <button onClick={handleDelete}>-</button>
        
    </div>
  )
}

export default Student