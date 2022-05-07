import React from 'react'

export default function Display(props) {
    
  

    function sortByFirstName(){
        let tmpData = []
    tmpData = [...props.input]
  
        tmpData.sort((a,b)=>( a.firstname > b.firstname? 1:-1))
        props.setData(tmpData)

    }

    function sortByLastName(){
        let tmpData = []
    tmpData = [...props.input]
        tmpData.sort((a,b)=>( a.lastname > b.lastname? 1:-1))
        props.setData(tmpData)
    }

    function sortByAgee(){
        let tmpData = []
    tmpData = [...props.input]
        tmpData.sort((a,b)=>( a.age - b.age))
        props.setData(tmpData)
    }
  return (
    <div>
        <table>
            <thead>
        <tr>
            <th onClick={sortByFirstName}>First Name</th>
            <th onClick={sortByLastName}>Last Name</th>
            <th onClick={sortByAgee}>Age</th>
        </tr>
        </thead>
        <tbody>
        {props.input.map((item,index) =>(
        <tr key = {index}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.age}</td>
        </tr>))}
    </tbody>
        </table>
    </div>
  )
}
