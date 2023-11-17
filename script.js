document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/MarvinAmine/it-is-hot-over-there/master/dataArray.json')
        .then(response => response.json())
        .then(data => {
            window.dataArray = data; // Store the data in a global variable

            // Calculate scores for each city and assign ranks
            calculateScoresAndRanks();

            populateTable(data);
        })
        .catch(error => console.error('Error fetching data: ', error));
});

async function updateDistances() {
    const userCity = document.getElementById('userCity').value;
    const userCountry = document.getElementById('userCountry').value;

    async function fetchCoordinates(city, country) {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&format=json`);
        const data = await response.json();
        if (data && data.length > 0) {
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        }
        return null;
    }

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    try {
        const userCoords = await fetchCoordinates(userCity, userCountry);

        if (userCoords) {
            window.dataArray.forEach(item => {
                if (item.latitude && item.longitude) {
                    item.distance = calculateDistance(userCoords.lat, userCoords.lon, parseFloat(item.latitude), parseFloat(item.longitude));
                } else {
                    item.distance = "Unknown";
                }
            });
        }

        populateTable(window.dataArray);
    } catch (error) {
        console.error('Error calculating distances:', error);
    }
}

function calculateScore(item) {
    const weights = { crimeWeight: 1, airbnbWeight: 1, ticketPriceWeight: 1 }; // Adjust weights as needed
    let score = 0;
    score += item.crimeIndex ? parseFloat(item.crimeIndex) * weights.crimeWeight : 0;
    score += item.airbnbAveragePricePerNight ? parseFloat(item.airbnbAveragePricePerNight) * weights.airbnbWeight : 0;
    
    let ticketPrice = item.distance ? item.distance * 0.30 : Infinity; // Calculate ticket price if not calculated
    score += ticketPrice * weights.ticketPriceWeight;

    return score;
}
function calculateScoresAndRanks() {
    window.dataArray.forEach(item => {
        item.score = calculateScore(item);
    });

    // Sort data based on score and assign ranks
    window.dataArray.sort((a, b) => a.score - b.score);
    window.dataArray.forEach((item, index) => {
        item.rank = index + 1;
    });
}

let currentSort = {
    field: '',
    order: ''
};

function populateTable(data) {

    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach((item)=> {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = item.rank;
        row.insertCell(1).textContent = item.city;
        row.insertCell(2).textContent = item.country;
        row.insertCell(3).textContent = item.crimeIndex + (item.isCountryCrimeIndex ? ' (Country Index)' : '');
        row.insertCell(4).textContent = item.tempInDegrees;
        row.insertCell(5).textContent = item.airbnbAveragePricePerNight === "" ? "Not Available" : item.airbnbAveragePricePerNight;
        row.insertCell(6).textContent = item.isCountryCrimeIndex ? 'Yes' : 'No';
        row.insertCell(7).textContent = item.distance ? item.distance.toFixed(2) + ' km' : 'Not calculated';

        // Calculate and add airplane ticket price
        const pricePerKm = 0.25; // $0.30 per km
        let ticketPrice = "Not calculated";
        if (item.distance && !isNaN(item.distance)) {
            ticketPrice = (item.distance * pricePerKm).toFixed(2) + ' USD';
        }
        row.insertCell(7).textContent = ticketPrice;
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
  
