
import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"
function App() {
  const [data, setData] = useState();

  const getData = async()=>{
    const res = await Axios.get("http://localhost:3000/getData");
    setData(res.data);
  }

  useEffect(()=>{
    getData()
  }, []);

  return (
    <>
      {data}
    </>
  )
}

export default App
