import React, { useState } from "react";
import { addStudent } from "../services/studentService";

function AddStudent() {
  const [student, setStudent] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student);
      alert("Student added successfully!");
      setStudent({ name: "", email: "" });
    } catch (error) {
      alert("Failed to add student");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={student.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
