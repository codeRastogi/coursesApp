import { useEffect, useState } from "react";
import Filter  from "./components/Filter";
import Navbar from "./components/Navbar";
import {apiUrl, filterData} from "./data";
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

function App() {


  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);
  const fetchData = async() => {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();

      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect( () => {
    fetchData();
  }, []);


  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <Filter
        filterData = {filterData}
      />
      </div>
      <div>
      {loading ?(<Spinner/>) : (<Cards courses={courses}/>)};
      </div>
    </div>
  );
}

export default App;
