import React, { useState } from "react";
import { addStudent } from "../services/studentService";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    department: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    alert("Student added successfully");
    window.location.reload(); // refresh list
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
