import { useState } from 'react';
import './App.css';
import Input from "./component/Input"

function App() {

  const [data, setData] = useState([])

 function getData(a){
  setData([...data,a])
 }
  
  // console.log(data)

  return (
    <div className="App">
      <Input getData={getData}/>
    </div>
  );
}

export default App;
