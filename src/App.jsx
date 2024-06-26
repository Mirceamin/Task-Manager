import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer"

function App() {
  const id = "T-2"
  const status = "Todo"
  const name = "Crate a Design System for Enum Workspace."
  const dueDate = new Date(2022, 5, 23)

  const data = [
    {
      id : "T-1",
      name : "Crate a Design System for Enum Workspace.",
      status : "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id : "T-2",
      name : "12 Crate a Design System for Enum Workspace.",
      status : "In Progress",
      dueDate: new Date(2022, 7, 24)
    },
    {
      id : "T-3",
      name : "13Crate a Design System for Enum Workspace.",
      status : "Complete",
      dueDate: new Date(2022, 6, 13)
    },
    {
      id: "T-4",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
  ]

  return (
    <div className = "app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer taskList = {data} />
      </div>
    </div>
  );
}

export default App;