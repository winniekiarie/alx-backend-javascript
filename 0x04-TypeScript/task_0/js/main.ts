// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco',
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Function to render table
function renderTable(): void {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = tableBody.insertRow();

    const cell1 = row.insertCell(0);
    cell1.textContent = student.firstName;

    const cell2 = row.insertCell(1);
    cell2.textContent = student.location;
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();

