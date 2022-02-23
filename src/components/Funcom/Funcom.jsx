import React, { useEffect, useState } from 'react'

export default function Funcom({userdata}){
    let[name,changeName]=useState('doaa');
    let[age,setage]=useState(30);
    let[salary,setsalary]=useState(5000);
    function changeuserName(){
      changeName('mariem')
    }
    function changeAge(){
      age++;
      setage(age)
    }
    function changesalary(){
      salary++;
      setsalary(salary)
    }
    useEffect(()=>{
      if(name!='doaa'){
        console.log('Did update') //make change & update
        }
      },[name,age]);//make change when make in name and age

      useEffect(()=>{
        if(salary!=5000){
          alert('Did update salary') //make change & update in salary
          }
        },[salary]);
  return (
    <>
        <div>name:{name}</div>
        <div>age:{age}</div>
        <div>salary:{salary}</div>
        <button onClick={changeuserName} className='btn btn-info my-3'>change name</button>
        <button onClick={changeAge} className='btn btn-info my-3'>change age</button>
        <button onClick={changesalary} className='btn btn-info my-3'>change salary</button>
    </>
  )
}
