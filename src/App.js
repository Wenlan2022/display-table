import { useState } from 'react';
import './App.css';
import Display from './component/Display';
import Input from "./component/Input"

function App() {

  const [data, setData] = useState([])

 function getData(inputData){
  setData([...data,inputData])
 }
  

  function filter(keyword){
    if(keyword !== ""){
    let tep = data.filter(item => item.firstname === keyword)
    setData([...tep])}
    else{
      setData([...data])
    }
  }

  return (
    <div className="App">
      <Input getData={getData} filter = {filter}/>
      <br/>

      <Display input = {data} setData= {setData}/>
    </div>
  );
}

export default App;
