import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'College Meeting',
      day: 'Feb 6th at 1:30PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 4:30PM',
      reminder: false,
    },
  ])

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleRemainder = (id) => {
    setTasks(tasks.map(
      (task)=> task.id === id ? {
        ...task, reminder: !task.reminder
      }:task
    ))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'You all Catch-Up 🎉'}
    </div>
  );
}

export default App;
