document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/MarvinAmine/it-is-hot-over-there/master/dataArray.json')
        .then(response => response.json())
        .then(data => {
            window.dataArray = data; // Store the data in a global variable
            populateTable(data);
        })
        .catch(error => console.error('Error fetching data: ', error));
});

let currentSort = {
    field: '',
    order: ''
};

function populateTable(data) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach(item => {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = item.city;
        row.insertCell(1).textContent = item.country;
        row.insertCell(2).textContent = item.crimeIndex + (item.isCountryCrimeIndex ? ' (Country Index)' : '');
        row.insertCell(3).textContent = item.tempInDegrees;
        row.insertCell(4).textContent = item.airbnbAveragePricePerNight === "" ? "Not Available" : item.airbnbAveragePricePerNight;
        row.insertCell(5).textContent = item.isCountryCrimeIndex ? 'Yes' : 'No';
    });
}

document.querySelectorAll('#dataTable th').forEach(header => {
    header.addEventListener('click', () => {
        sortTable(header.getAttribute('id'));
    });
});

function sortTable(sortField) {
    if (currentSort.field === sortField) {
        currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.field = sortField;
        currentSort.order = 'asc';
    }
    
    const sortedData = dataArray.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (sortField === 'crimeIndex' || sortField === 'airbnbAveragePricePerNight') {
            valA = valA === "" ? (currentSort.order === 'asc' ? Infinity : -Infinity) : parseFloat(valA);
            valB = valB === "" ? (currentSort.order === 'asc' ? Infinity : -Infinity) : parseFloat(valB);
        }

        if (sortField === 'isCountryCrimeIndex') {
            valA = valA === true ? 1 : 0;
            valB = valB === true ? 1 : 0;
        }
        
        if (valA < valB) {
            return -1;
        }
        if (valA > valB) {
            return 1;
        }
        return 0;
    });

    if (currentSort.order === 'desc') {
        sortedData.reverse();
    }
    
    populateTable(sortedData);
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
  
