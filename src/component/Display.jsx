import React,{useState} from 'react'

export default function Display(props) {
    
    // console.log(props.input)

    const [data, setData] = useState([...props.input])
    // const [sort, setSort] = useState([])
    
  
        // console.log("------------------------")


    console.log(data)

    

    function sortByFirstName(){
        console.log("hello")
        let tmpData = []
        tmpData = [...data]
        
        tmpData.sort((a,b)=>( a.firstname > b.firstname? 1:-1))
        setData(tmpData)

    }
  return (
    <div>
        <table>
        <tr>
            <th onClick={sortByFirstName}>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        {data.length > 0 ?data.map((item,index) =>(
        <tr key = {index}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.age}</td>
        </tr>
    )):"loading"}
        </table>
    </div>
  )
}
