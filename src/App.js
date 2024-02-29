import { useEffect, useState } from "react";
import Filter  from "./components/Filter";
import Navbar from "./components/Navbar";
import {apiUrl, filterData} from "./data";
import { toast } from "react-toastify";
import Cards from "./components/Cards";

function App() {


  const[courses, setCourses] = useState();
  useEffect( () => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Filter
        filterData = {filterData}
      />
      <Cards courses = {courses}/>
    </div>
  );
}

export default App;
