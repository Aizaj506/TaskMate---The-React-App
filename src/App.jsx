import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header.jsx";
import ShowTask from "./components/ShowTask";
import "./App.css"


const App = () => {
  const [tasklist,setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    console.log("Tasklist saved in local storage");
  },[tasklist])
  return (
    <div className="App">
      <Header/>
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  )
}

export default App
