import { useState } from 'react';
import './App.css';
import Display from './component/Display';
import Input from "./component/Input"

function App() {

  const [data, setData] = useState([])

 function getData(inputData){
  //  console.log("hello")
  setData([...data,inputData])
 }
  
  // console.log(data)

  return (
    <div className="App">
      <Input getData={getData}/>
      <br/>

      <Display input = {data}/>
    </div>
  );
}

export default App;
