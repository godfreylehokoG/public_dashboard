$(document).ready(function() {
  $('#dataTable').DataTable();
  async function fetchData() {
    const response = await fetch('http://localhost:3000/table-data');
    const data = await response.json();

    const tableBody = document.getElementById('table-body');

    // Clear table body
    tableBody.innerHTML = '';

    // Populate table with data
    data.forEach((item) => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const phoneCell = document.createElement('td');
      const faultCell = document.createElement('td');
      const addressCell = document.createElement('td');
      const dateCell = document.createElement('td');

      nameCell.textContent = item.name;
      phoneCell.textContent = item.phone;
      faultCell.textContent = item.fault_type;
      addressCell.textContent = item.address;
      dateCell.textContent = item.date;

      row.appendChild(nameCell);
      row.appendChild(phoneCell);
      row.appendChild(faultCell);
      row.appendChild(addressCell);
      row.appendChild(dateCell);

      tableBody.appendChild(row);
    });
  }

  fetchData();
});

async function fetchData() {
  const response = await fetch('http://localhost:3000/table-data');
  const data = await response.json();

  const tableBody = document.getElementById('table-body');

  // Clear table body
  tableBody.innerHTML = '';

  // Populate table with data
  data.forEach((item) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');
    const faultCell = document.createElement('td');
    const addressCell = document.createElement('td');
    const dateCell = document.createElement('td');

    nameCell.textContent = item.name;
    phoneCell.textContent = item.phone;
    faultCell.textContent = item.fault_type;
    addressCell.textContent = item.address;
    dateCell.textContent = item.date;

    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(faultCell);
    row.appendChild(addressCell);
    row.appendChild(dateCell);

    tableBody.appendChild(row);
  });
}

fetchData();