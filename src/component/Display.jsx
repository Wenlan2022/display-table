import React from 'react'

export default function Display(props) {
    
    let tmpData = []
    tmpData = [...props.input]

    function sortByFirstName(){
  
        tmpData.sort((a,b)=>( a.firstname > b.firstname? 1:-1))
        props.setData(tmpData)

    }

    function sortByLastName(){
        
        tmpData.sort((a,b)=>( a.lastname > b.lastname? 1:-1))
        props.setData(tmpData)
    }

    function sortByAgee(){
        
        tmpData.sort((a,b)=>( a.age > b.age? 1:-1))
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
