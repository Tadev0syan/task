import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import ModalDelete from "./components/ModalDelete"

function App() {

const [tasks, setTasks] = useState(
  JSON.parse(localStorage.getItem('tasks')) || []
)

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

  const [btnActive, setBtnActive] = useState(true)

  const [modalActive, setModalActive] = useState(false)

  const [delTaskId, setDelTaskId] = useState(-1)


  const [hideCompleted, sethHideCompleted] = useState(false)

  return (
    <div className="App">
      <AddTask 
        onAdd={(text) => {
          setTasks([
            {
              id: tasks.length,
              text: text,
              isCompleted: false
            },
            ...tasks
          ])
        }}

        onChange={() => {
          sethHideCompleted(!hideCompleted)
        }}

        setBtnActive={setBtnActive}
        btnActive={btnActive}
      />

      <TaskList
        setActive={setModalActive}
        setDelTaskId={setDelTaskId}
        hideCompleted={hideCompleted}
        tasks={tasks}
        setTasks={setTasks}
        onDelete={(task) => {
          setTasks(tasks.filter((t) => t.id !== task.id))
        }}

        onChange={(newTask) => {
          setTasks(tasks.map((task) => {
            if(task.id === newTask.id){
              return newTask
            }
            return task
          }))
        }}
      />
      
      <ModalDelete 
        active={modalActive} 
        onDelete={() => {
          setTasks(tasks.filter((t) => t.id !== delTaskId))
        }}
        setActive={setModalActive}
      />
    </div>
  );
}

export default App;
