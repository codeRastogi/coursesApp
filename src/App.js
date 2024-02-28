import Filter  from "./components/Filter";
import Navbar from "./components/Navbar";
import {apiUrl, filterData} from "./data";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filter
        filterData = {filterData}
      />
      
    </div>
  );
}

export default App;
