import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Student from "./Student.js";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import HonorRoll from "./HonorRoll";
import Ranking from "./Ranking"




export const StudentContext=React.createContext();

function App() {

  const [students, setStudents]=useState([]);
  const [fname,setFName]=useState('');
  const [lname,setLName]=useState('');
  const [testGrades, setTestGrades]=useState([0,0,0,0,0]);
  const [tutored, setTutored]=useState(false);
  const [timesPerWeek,setTimesPerWeek]=useState(0);
  const [testGrade1, setTestGrade1]=useState(0);
  const [testGrade2, setTestGrade2]=useState(0);
  const [testGrade3, setTestGrade3]=useState(0);
  const [testGrade4, setTestGrade4]=useState(0);
  const [testGrade5, setTestGrade5]=useState(0);

  useEffect(()=>{
    axios.get('http://localhost:5000/')
      .then(res=>setStudents(res.data))
      
  },[])

  

  function handleSubmit(e){
    e.preventDefault()

    let average=((testGrade1+testGrade2+testGrade3+testGrade4+testGrade5)/5);
    console.log(average);
    
    const newStudent={
      fname:fname,
      lname:lname,
      testGrades:[testGrade1,testGrade2,testGrade3,testGrade4,testGrade5],
      average:average,
      tutored:tutored,
      timesPerWeek:timesPerWeek
    }
    
    axios.post("http://localhost:5000/",newStudent)
      .then((res)=>setStudents(res.data));

  }

  return (
    <div>
      <h1>Student Logger</h1>
      
        <Router>
          <Navbar/>

          <Switch>
            <Route exact path="/"> 
              {students.map((student)=>{
                return (
                  <Student
                    key={student.ID}
                    fname={student.fname}
                    lname={student.lname}
                    testGrades={student.testGrades}
                    tutored={student.tutored}
                    timesPerWeek={student.timesPerWeek}
                    setStudents={setStudents}
                  />
                )
              })}

              <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input onChange={(e)=>{
                  setFName(e.target.value)
                }} value={fname}></input>
                <label>Last Name</label>
                <input onChange={(e)=>{
                  setLName(e.target.value)
                }} value={lname}></input>
                <label>Test Grades</label>
                <input onChange={(e)=>{
                  setTestGrade1(parseInt(e.target.value));
                }} value={testGrade1} type="number" min="0" max="100"></input>
                <input onChange={(e)=>{
                  setTestGrade2(parseInt(e.target.value));
                }} value={testGrade2} type="number" min="0" max="100"></input>
                <input onChange={(e)=>{
                  setTestGrade3(parseInt(e.target.value));
                }} value={testGrade3} type="number" min="0" max="100"></input>
                <input onChange={(e)=>{
                  setTestGrade4(parseInt(e.target.value));
                }} value={testGrade4} type="number" min="0" max="100"></input>
                <input onChange={(e)=>{
                  setTestGrade5(parseInt(e.target.value));
                }} value={testGrade5} type="number" min="0" max="100"></input>
                
                <label for="tutored">Being Tutored?</label>
                <input onChange={(e)=>{
                  if(e.target.checked==true){
                    setTutored(true);
                  }else{
                    setTutored(false);
                    setTimesPerWeek(0);
                  }
                }} id="tutored" value={tutored} type="checkbox"></input>
                <label for="quantity">Sessions Per Week</label>
                <input onChange={(e)=>{
                  if(tutored==true){
                    setTimesPerWeek(e.target.value);
                  }
                }} value={timesPerWeek} type="number" id="quantity" name="quantity" min="0" max="7"></input>
                <button type="submit">+</button>

              </form>
              
            </Route>
            <StudentContext.Provider value={students}>
              <Route path="/rankings" component={Ranking}/>    
              <Route path="/honorroll" component={HonorRoll}/>     
            </StudentContext.Provider>
          </Switch>
        </Router>
      
      

      
    </div>
  )
}

export default App