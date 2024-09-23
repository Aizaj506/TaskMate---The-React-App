/* eslint-disable react/prop-types */

const ShowTask = ({tasklist, setTasklist,setTask}) => {

  const handleEditTask = (id)=>{
    console.log(`Edit id is ${id}`);
    const selectedTask = tasklist.find((todo)=>todo.id === id);
    setTask(selectedTask);
  }

  const handleDeleteTask = (id)=>{
    // console.log(`Delet id : ${id}`);
    const updatedTaskList = tasklist.filter((todo)=>todo.id !== id);
    setTasklist(updatedTaskList);
  }
    
  return (
    <div className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={()=>setTasklist([])} className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i onClick={()=> handleEditTask(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={()=> handleDeleteTask(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;
