const API_URL = "http://localhost:8080/students";

// GET all students
export const getStudents = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// ADD student
export const addStudent = async (student) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return response.json();
};

// DELETE student
export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
