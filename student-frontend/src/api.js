const API_URL = "http://localhost:8080/students";

export const getStudents = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addStudent = async (student) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(student),
  });
  return res.json();
};

export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
