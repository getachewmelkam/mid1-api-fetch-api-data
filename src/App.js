
import './App.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const[data,setData]=useState([])
  const[name,setname]=useState()
  const[grade,setgrade]=useState()
const postdata=()=>{
    axios.post('http://127.0.0.1:8000/student/list',{
     id:null,
     name:name,
     grade:grade,
    }).then((response)=>
     setData(response.data)
    )
  }
 const deleteData=(id)=>{
  axios.delete(`http://127.0.0.1:8000/student/delete/${id}`)
  .then()
  
 }
 
//    update(e) 
//   {
//   e.preventDefault();
//   const datas = {
//       name: name,
//       grade: grade,
      
//   }
//   axios.put('http://127.0.0.1:8000/student/delete/${id}', datas)
//   .then(res => console.log(res.data));
// }
 


 

  const fetchdata=()=>{
   axios.get('http://127.0.0.1:8000/student/list').then((response)=>
    setData(response.data)
   )
  }
  useEffect(()=>{
  fetchdata()
 
 
  },[])
  const handlechangeName=(e)=>{
   setname(e.target.value)
    
  }
  const handlechangeGrade=(e)=>{
   setgrade(e.target.value)
 
  }
  return (
    <div className="App">
      {data.map((value)=>{
       return <div key={value.id}><h1>Name: {value.name}</h1>
                  <h1> Grade: {value.grade}</h1>
                  <button onClick={()=>deleteData(value.id)}>Delete</button>
                
            </div>
    }
   )}
   <form >
   <input type='text' value={name} onChange={handlechangeName}/>
   <input type='number' value={grade} onChange={handlechangeGrade}/>
   <button onClick={postdata}>submit</button>
   
   </form>
    </div>
  );
}

export default App;
