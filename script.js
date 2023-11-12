document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/MarvinAmine/it-is-hot-over-there/master/dataArray.json')
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error('Error fetching data: ', error));
});

// This will keep track of the current sort state
let currentSort = {
    field: '',
    order: ''
};

function populateTable(data) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear the table body
    
    data.forEach(item => {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = item.city;
        row.insertCell(1).textContent = item.country;
        row.insertCell(2).textContent = item.crimeIndex + (item.isCountryCrimeIndex ? ' (Country Index)' : '');
        row.insertCell(3).textContent = item.tempInDegrees;
        row.insertCell(4).textContent = item.isCountryCrimeIndex ? 'Yes' : 'No';
    });
}

// Add event listeners to headers for sorting
document.querySelectorAll('#dataTable th').forEach(header => {
    header.addEventListener('click', () => {
        const field = header.getAttribute('id'); // Use the id attribute to identify the sort field
        sortTable(field);
    });
});

function sortTable(sortField) {
    // If the same field was sorted, reverse the order
    if (currentSort.field === sortField) {
        currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
    } else {
        // If a new field is being sorted, start with ascending order
        currentSort.field = sortField;
        currentSort.order = 'asc';
    }
    
    const sortedData = dataArray.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        
        // Handle if the crimeIndex is 'N/A' or contains additional text
        if (sortField === 'crimeIndex') {
        valA = valA === 'N/A' ? (currentSort.order === 'asc' ? -Infinity : Infinity) : parseFloat(valA);
        valB = valB === 'N/A' ? (currentSort.order === 'asc' ? -Infinity : Infinity) : parseFloat(valB);
        }

        // For boolean values, convert 'Yes'/'No' to numbers for sorting
        if (sortField === 'isCountryCrimeIndex') {
        valA = valA === 'Yes' ? 1 : 0;
        valB = valB === 'Yes' ? 1 : 0;
        }
        
        if (valA < valB) {
        return currentSort.order === 'asc' ? -1 : 1;
        }
        if (valA > valB) {
        return currentSort.order === 'asc' ? 1 : -1;
        }
        return 0;
    });
    
    populateTable(sortedData); // Re-render the table with the sorted data
}
function searchTable() {
    let input, filter, table, tr, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('dataTable');
    tr = table.getElementsByTagName('tr');
  
    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
      let tds = tr[i].getElementsByTagName('td');
      let found = false;
      for (let j = 0; j < tds.length; j++) {
        if (tds[j]) {
          txtValue = tds[j].textContent || tds[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            found = true;
            break;
          }
        }
      }
      tr[i].style.display = found ? "" : "none";
    }
  }
  
