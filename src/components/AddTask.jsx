/* eslint-disable react/prop-types */

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (task.id) {
      console.log(`Task ${task.id} is Edited`);
      const date = new Date();
      const updateTask = tasklist.map((todo)=>(
        todo.id === task.id ? {id: task.id, name:task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : {id:todo.id,name:todo.name,time:todo.time}
      ))
      console.log(updateTask);
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.taskInput.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({}); // for empty the task input field
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="taskInput"
          value={task.name || ""}
          placeholder="Add Task"
          autoComplete="off"
          maxLength={50}
          required
          onChange={(e)=> setTask({...task,name:e.target.value})}
        />
        <button type="submit">{task.id ? "Update Task":"Add Task"}</button>
      </form>
    </section>
  );
};

export default AddTask;
