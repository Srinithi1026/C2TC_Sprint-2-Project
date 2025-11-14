import React from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import { getStudents, addStudent, deleteStudent } from "./services/studentService";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student Management System</h1>
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;
