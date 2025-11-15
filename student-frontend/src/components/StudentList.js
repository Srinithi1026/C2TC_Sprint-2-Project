import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadData = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    alert("Student Deleted");
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {students.map((s) => (
        <div key={s.id}>
          <p>
            <b>{s.name}</b> — {s.department} — {s.email}
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
