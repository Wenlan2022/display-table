import React, { useState } from 'react'

export default function Input(props) {

    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [age, setAge] = useState()

    const [filter, setFilter] = useState("")
    function submitData(e){
        e.preventDefault()
        props.getData({firstname:first, lastname:last, age:age})
        
    }

    function filterData(){
      props.filter(filter)
    }


  return (
    <div>
        <form onSubmit={submitData} className='inputform'>
        <label htmlFor="">First Name:</label>
        <input type="text" onChange={(e)=>{setFirst(e.target.value)}}/>

        

        <label htmlFor="">Last Name:</label>
        <input type="text" onChange={(e)=>{setLast(e.target.value)}}/>

        

        <label htmlFor="">Age:</label>
        <input type="text" onChange={(e)=>{setAge(e.target.value)}}/>
        
        <button type='submit'>Sumbit</button>
        </form>

        <br />
        <label >Search:</label>
        <input type="text" onChange={e=>setFilter(e.target.value)}/>
        <button onClick={filterData}>Filter</button>
    </div>
  )
}
