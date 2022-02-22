import React from 'react'

export default function Funcom({userdata}){
    let myState={
        name:'doaa',
        salary:20000,
        age:37
    }
    function wellcom(){
        alert('wellcom')
    }
  return (
    <>
        <div>age:{userdata}</div>
        <button onClick={wellcom} className='btn btn-info my-3'>fun</button>
    </>
  )
}
