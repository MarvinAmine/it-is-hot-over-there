const dataArray =  [
    {
        "city": "Luanda",
        "country": "Angola",
        "crimeIndex": "66.70",
        "tempInDegrees": "26.7(80.1)"
    },
    {
        "city": "Cotonou",
        "country": "Benin",
        "crimeIndex": "31.66",
        "tempInDegrees": "27.6(81.7)"
    },
    {
        "city": "Parakou",
        "country": "Benin",
        "crimeIndex": "57.42",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.6(79.9)"
    },
    {
        "city": "Kandi",
        "country": "Benin",
        "crimeIndex": "31.66",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.5(79.7)"
    },
    {
        "city": "Maun",
        "country": "Botswana",
        "crimeIndex": "52.22",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.4(79.5)"
    },
    {
        "city": "Ghanzi",
        "country": "Botswana",
        "crimeIndex": "52.22",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "25.7(78.3)"
    },
    {
        "city": "Ouagadougou",
        "country": "Burkina Faso",
        "crimeIndex": "43.85",
        "tempInDegrees": "27.7(81.9)"
    },
    {
        "city": "Ouahigouya",
        "country": "Burkina Faso",
        "crimeIndex": "49.43",
        "tempInDegrees": "27.4(81.3)"
    },
    {
        "city": "Garoua",
        "country": "Cameroon",
        "crimeIndex": "63.63",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Douala",
        "country": "Cameroon",
        "crimeIndex": "70.26",
        "tempInDegrees": "26.9(80.4)"
    },
    {
        "city": "Praia",
        "country": "Cape Verde",
        "crimeIndex": "51.49",
        "tempInDegrees": "25.4(77.7)"
    },
    {
        "city": "Bangui",
        "country": "Central African Republic",
        "crimeIndex": "81.91",
        "tempInDegrees": "25.7(78.3)"
    },
    {
        "city": "N'Djamena",
        "country": "Chad",
        "crimeIndex": "67.75",
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Abéché",
        "country": "Chad",
        "crimeIndex": "75.89",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "28.5(83.3)"
    },
    {
        "city": "Kinshasa",
        "country": "Democratic Republic of the Congo",
        "crimeIndex": "71.80",
        "tempInDegrees": "25.9(78.6)"
    },
    {
        "city": "Djibouti",
        "country": "Djibouti",
        "crimeIndex": "42.29",
        "tempInDegrees": "26.9(80.4)"
    },
    {
        "city": "Bata",
        "country": "Equatorial Guinea",
        "crimeIndex": "57.21",
        "tempInDegrees": "25.2(77.4)"
    },
    {
        "city": "Malabo",
        "country": "Equatorial Guinea",
        "crimeIndex": "32.68",
        "tempInDegrees": "26.1(79.0)"
    },
    {
        "city": "Assab",
        "country": "Eritrea",
        "crimeIndex": "30.70",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "28.8(83.8)"
    },
    {
        "city": "Libreville",
        "country": "Gabon",
        "crimeIndex": "53.65",
        "tempInDegrees": "25.9(78.6)"
    },
    {
        "city": "Port-Gentil",
        "country": "Gabon",
        "crimeIndex": "56.25",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.1(79.0)"
    },
    {
        "city": "Banjul",
        "country": "The Gambia",
        "crimeIndex": "43.78",
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Accra",
        "country": "Ghana",
        "crimeIndex": "44.17",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Tamale",
        "country": "Ghana",
        "crimeIndex": "44.16",
        "tempInDegrees": "28.2(82.8)"
    },
    {
        "city": "Kumasi",
        "country": "Ghana",
        "crimeIndex": "38.26",
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Conakry",
        "country": "Guinea",
        "crimeIndex": "58.76",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Kankan",
        "country": "Guinea",
        "crimeIndex": "44.16",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Bissau",
        "country": "Guinea-Bissau",
        "crimeIndex": "51.82",
        "tempInDegrees": "27(81)"
    },
    {
        "city": "Gagnoa",
        "country": "Ivory Coast",
        "crimeIndex": "57.40",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Bouaké",
        "country": "Ivory Coast",
        "crimeIndex": "57.40",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Abidjan",
        "country": "Ivory Coast",
        "crimeIndex": "57.30",
        "tempInDegrees": "27(81)"
    },
    {
        "city": "Mombasa",
        "country": "Kenya",
        "crimeIndex": "64.67",
        "tempInDegrees": "26.9(80.4)"
    },
    {
        "city": "Garissa",
        "country": "Kenya",
        "crimeIndex": "56.98",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "29.9(85.8)"
    },
    {
        "city": "Lodwar",
        "country": "Kenya",
        "crimeIndex": "56.98",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "29.1(84.4)"
    },
    {
        "city": "Antsiranana",
        "country": "Madagascar",
        "crimeIndex": "61.04",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.3(79.3)"
    },
    {
        "city": "Mahajanga",
        "country": "Madagascar",
        "crimeIndex": "61.04",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.7(81.9)"
    },
    {
        "city": "Toliara",
        "country": "Madagascar",
        "crimeIndex": "61.04",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "25.3(77.5)"
    },
    {
        "city": "Karonga",
        "country": "Malawi",
        "crimeIndex": "58.60",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Ségou",
        "country": "Mali",
        "crimeIndex": "58.60",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27(81)"
    },
    {
        "city": "Timbuktu",
        "country": "Mali",
        "crimeIndex": "58.60",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Bamako",
        "country": "Mali",
        "crimeIndex": "49.59",
        "tempInDegrees": "26.5(79.7)"
    },
    {
        "city": "Nouakchott",
        "country": "Mauritania",
        "crimeIndex": "39.17",
        "tempInDegrees": "25.8(78.4)"
    },
    {
        "city": "Niamey",
        "country": "Niger",
        "crimeIndex": "72.53",
        "tempInDegrees": "27.9(82.2)"
    },
    {
        "city": "Lagos",
        "country": "Nigeria",
        "crimeIndex": "67.5",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Makurdi",
        "country": "Nigeria",
        "crimeIndex": "65.99",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.1(79.0)"
    },
    {
        "city": "Sokoto",
        "country": "Nigeria",
        "crimeIndex": "65.99",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27(81)"
    },
    {
        "city": "Brazzaville",
        "country": "Republic of the Congo",
        "crimeIndex": "50.00",
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Pointe-Noire",
        "country": "Republic of the Congo",
        "crimeIndex": "53.97",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26.7(80.1)"
    },
    {
        "city": "Dakar",
        "country": "Senegal",
        "crimeIndex": "40.75",
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Thiès",
        "country": "Senegal",
        "crimeIndex": "44.17",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Bosaso",
        "country": "Somalia",
        "crimeIndex": "65.96",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "25.6(78.1)"
    },
    {
        "city": "Mogadishu",
        "country": "Somalia",
        "crimeIndex": "65.96",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.5(81.5)"
    },
    {
        "city": "Juba",
        "country": "South Sudan",
        "crimeIndex": "78.75",
        "tempInDegrees": "27.6(81.7)"
    },
    {
        "city": "Wau",
        "country": "South Sudan",
        "crimeIndex": "67.1",
        "tempInDegrees": "27.4(81.3)"
    },
    {
        "city": "Port Sudan",
        "country": "Sudan",
        "crimeIndex": "45.93",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Khartoum",
        "country": "Sudan",
        "crimeIndex": "39.48",
        "tempInDegrees": "28.1(82.6)"
    },
    {
        "city": "Dar es Salaam",
        "country": "Tanzania",
        "crimeIndex": "57.53",
        "tempInDegrees": "26.3(79.3)"
    },
    {
        "city": "Zanzibar City",
        "country": "Tanzania",
        "crimeIndex": "54.90",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27(81)"
    },
    {
        "city": "Dodoma",
        "country": "Tanzania",
        "crimeIndex": "51.84",
        "tempInDegrees": "25.1(77.2)"
    },
    {
        "city": "Lomé",
        "country": "Togo",
        "crimeIndex": "45.77",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Mango",
        "country": "Togo",
        "crimeIndex": "26.1",
        "tempInDegrees": "27.9(82.2)"
    },
    {
        "city": "Livingstone",
        "country": "Zambia",
        "crimeIndex": "43.06",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "25.1(77.2)"
    },
    {
        "city": "Phnom Penh",
        "country": "Cambodia",
        "crimeIndex": "55.4",
        "tempInDegrees": "27.1(80.8)"
    },
    {
        "city": "Dili",
        "country": "East Timor",
        "crimeIndex": "42.07",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Mumbai",
        "country": "India",
        "crimeIndex": "45.09",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Jakarta",
        "country": "Indonesia",
        "crimeIndex": "52.7",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Jayapura",
        "country": "Indonesia",
        "crimeIndex": "48.53",
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Makassar",
        "country": "Indonesia",
        "crimeIndex": "51.67",
        "tempInDegrees": "27.7(81.9)"
    },
    {
        "city": "Medan",
        "country": "Indonesia",
        "crimeIndex": "54.39",
        "tempInDegrees": "26.0(78.8)"
    },
    {
        "city": "Palembang",
        "country": "Indonesia",
        "crimeIndex": "74.02",
        "tempInDegrees": "27.4(81.3)"
    },
    {
        "city": "Pontianak",
        "country": "Indonesia",
        "crimeIndex": "45.94",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Surabaya",
        "country": "Indonesia",
        "crimeIndex": "33.19",
        "tempInDegrees": "28.3(82.9)"
    },
    {
        "city": "Kuala Lumpur",
        "country": "Malaysia",
        "crimeIndex": "63.0",
        "tempInDegrees": "26.8(80.2)"
    },
    {
        "city": "Malé",
        "country": "Maldives",
        "crimeIndex": "63.06",
        "tempInDegrees": "27.7(81.9)"
    },
    {
        "city": "Mandalay",
        "country": "Myanmar",
        "crimeIndex": "66.60",
        "tempInDegrees": "25.7(78.3)"
    },
    {
        "city": "Yangon",
        "country": "Myanmar",
        "crimeIndex": "49.29",
        "tempInDegrees": "27.4(81.3)"
    },
    {
        "city": "Manila",
        "country": "Philippines",
        "crimeIndex": "65.4",
        "tempInDegrees": "28.0(82.4)"
    },
    {
        "city": "Singapore",
        "country": "Singapore",
        "crimeIndex": "29.2",
        "tempInDegrees": "27(81)"
    },
    {
        "city": "Colombo",
        "country": "Sri Lanka",
        "crimeIndex": "41.6",
        "tempInDegrees": "26.7(80.1)"
    },
    {
        "city": "Bangkok",
        "country": "Thailand",
        "crimeIndex": "40.5",
        "tempInDegrees": "27.8(82.0)"
    },
    {
        "city": "Hat Yai",
        "country": "Thailand",
        "crimeIndex": "27.21",
        "tempInDegrees": "26.0(78.8)"
    },
    {
        "city": "Nakhon Ratchasima",
        "country": "Thailand",
        "crimeIndex": "10.78",
        "tempInDegrees": "25.4(77.7)"
    },
    {
        "city": "Ho Chi Minh City",
        "country": "Vietnam",
        "crimeIndex": "52.5",
        "tempInDegrees": "26.7(80.1)"
    },
    {
        "city": "Aden",
        "country": "Yemen",
        "crimeIndex": "21.2",
        "tempInDegrees": "27.1(80.8)"
    },
    {
        "city": "St. John's",
        "country": "Antigua and Barbuda",
        "crimeIndex": "64.08",
        "tempInDegrees": "26.8(80.2)"
    },
    {
        "city": "Oranjestad",
        "country": "Aruba",
        "crimeIndex": "25.36",
        "tempInDegrees": "28.1(82.6)"
    },
    {
        "city": "Bridgetown",
        "country": "Barbados",
        "crimeIndex": "42.02",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Belize City",
        "country": "Belize",
        "crimeIndex": "66.46",
        "tempInDegrees": "25.6(78.1)"
    },
    {
        "city": "George Town",
        "country": "Cayman Islands",
        "crimeIndex": "32.45",
        "tempInDegrees": "27.5(81.5)"
    },
    {
        "city": "Willemstad",
        "country": "Curaçao",
        "crimeIndex": "58.47",
        "tempInDegrees": "28.0(82.4)"
    },
    {
        "city": "Roseau",
        "country": "Dominica",
        "crimeIndex": "56.25",
        "tempInDegrees": "26.2(79.2)"
    },
    {
        "city": "Santo Domingo",
        "country": "Dominican Republic",
        "crimeIndex": "67.2",
        "tempInDegrees": "26.0(78.8)"
    },
    {
        "city": "La Ceiba",
        "country": "Honduras",
        "crimeIndex": "75.94",
        "tempInDegrees": "25.2(77.4)"
    },
    {
        "city": "Kingston",
        "country": "Jamaica",
        "crimeIndex": "70.9",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Villahermosa",
        "country": "Mexico",
        "crimeIndex": "47.97",
        "tempInDegrees": "25.7(78.3)"
    },
    {
        "city": "Managua",
        "country": "Nicaragua",
        "crimeIndex": "53.11",
        "tempInDegrees": "26.3(79.3)"
    },
    {
        "city": "Panama City",
        "country": "Panama",
        "crimeIndex": "47.7",
        "tempInDegrees": "27(81)"
    },
    {
        "city": "San Juan",
        "country": "Puerto Rico",
        "crimeIndex": "68.4",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Cairns",
        "country": "Australia",
        "crimeIndex": "61.7",
        "tempInDegrees": "26(79)"
    },
    {
        "city": "Dampier",
        "country": "Australia",
        "crimeIndex": "47.11",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "28.3(82.9)"
    },
    {
        "city": "Darwin",
        "country": "Australia",
        "crimeIndex": "60.4",
        "tempInDegrees": "29.3(84.7)"
    },
    {
        "city": "Suva",
        "country": "Fiji",
        "crimeIndex": "54.58",
        "tempInDegrees": "26.1(79.0)"
    },
    {
        "city": "Port Moresby",
        "country": "Papua New Guinea",
        "crimeIndex": "80.7",
        "tempInDegrees": "27.6(81.7)"
    },
    {
        "city": "Honiara",
        "country": "Solomon Islands",
        "crimeIndex": "66.15",
        "tempInDegrees": "26.7(80.1)"
    },
    {
        "city": "Honolulu",
        "country": "United States",
        "crimeIndex": "47.3",
        "tempInDegrees": "25.4(77.7)"
    },
    {
        "city": "Santa Cruz de la Sierra",
        "country": "Bolivia",
        "crimeIndex": "64.49",
        "isCountryCrimeIndex": true,
        "tempInDegrees": "27.1(80.8)"
    },
    {
        "city": "Belém",
        "country": "Brazil",
        "crimeIndex": "72.94",
        "tempInDegrees": "26.5(79.7)"
    },
    {
        "city": "Fortaleza",
        "country": "Brazil",
        "crimeIndex": "77.3",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Manaus",
        "country": "Brazil",
        "crimeIndex": "70.87",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Recife",
        "country": "Brazil",
        "crimeIndex": "76.4",
        "tempInDegrees": "26.1(79.0)"
    },
    {
        "city": "Salvador",
        "country": "Brazil",
        "crimeIndex": "76.6",
        "tempInDegrees": "25.5(77.9)"
    },
    {
        "city": "Barranquilla",
        "country": "Colombia",
        "crimeIndex": "66.17",
        "tempInDegrees": "27.4(81.3)"
    },
    {
        "city": "Valledupar",
        "country": "Colombia",
        "crimeIndex": "72.55",
        "tempInDegrees": "29.0(84.2)"
    },
    {
        "city": "Guayaquil",
        "country": "Ecuador",
        "crimeIndex": "71.6",
        "tempInDegrees": "26.2(79.2)"
    },
    {
        "city": "Cayenne",
        "country": "French Guiana",
        "crimeIndex": "69.12",
        "tempInDegrees": "27.0(80.6)"
    },
    {
        "city": "Georgetown",
        "country": "Guyana",
        "crimeIndex": "70.52",
        "tempInDegrees": "27.2(81.0)"
    },
    {
        "city": "Paramaribo",
        "country": "Suriname",
        "crimeIndex": "51.36",
        "tempInDegrees": "27.3(81.1)"
    },
    {
        "city": "Maracaibo",
        "country": "Venezuela",
        "crimeIndex": "81.66",
        "tempInDegrees": "28.3(82.9)"
    }
]
document.addEventListener('DOMContentLoaded', function() {
    populateTable(dataArray);
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
  
