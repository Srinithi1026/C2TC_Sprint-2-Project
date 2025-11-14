import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadData = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadData(); // refresh
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.email}
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
