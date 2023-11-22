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
document.addEventListener('DOMContentLoaded', function() {
    // Fetch data and initialize the table
    fetchDataAndInitialize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load
});

async function fetchDataAndInitialize() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/MarvinAmine/it-is-hot-over-there/master/dataArray.json');
        const data = await response.json();
        window.dataArray = data;
        calculateScoresAndRanks();
        populateTable(window.dataArray);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function handleResize() {
    const isMobileView = window.innerWidth <= 600;
    if (isMobileView) {
        createMobileSortingOptions();
    } else {
        removeMobileSortingOptions();
    }
    populateTable(window.dataArray);
}

function createMobileSortingOptions() {
    // Create the dropdown for sorting if it doesn't exist
    if (!document.getElementById('sortSelect')) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <select id="sortSelect">
                <option value="rank">Rank</option>
                <option value="city">City</option>
                <option value="country">Country</option>
                <option value="crimeIndex">Crime Index</option>
                <option value="tempInDegrees">Temperature</option>
                <option value="airbnbAveragePricePerNight">Airbnb Price</option>
                <option value="distance">Distance</option>
            </select>
            <button onclick="sortTableMobile()">Sort</button>
        `;
        document.body.insertBefore(inputGroup, document.getElementById('dataTable'));
    }
}

function removeMobileSortingOptions() {
    // Remove the sorting dropdown if it exists
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.parentNode.remove();
    }
}

function sortTableMobile() {
    const sortField = document.getElementById('sortSelect').value;
    sortTable(sortField);
}

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

function calculateLogarithmicTicketPrice(distance) {
    // Coefficients for the logarithmic model
    const a = 0.05;
    const b = 150;

    // Calculate the price using the logarithmic formula
    // Adding a small value to distance to avoid log(0) issue
    const price = (a * distance + b) * 0.73;
    return price > 0 ? price : 0; // Ensure the ticket price is not negative
}

function calculateScore(item) {
    const weights = { crimeWeight: 1, airbnbWeight: 1, ticketPriceWeight: 1 }; // Adjust weights as needed
    let score = 0;

    // Adjust the crime score based on criteria
    let crimeScore = item.crimeIndex ? parseFloat(item.crimeIndex) : 0;
    if (crimeScore < 30) {
        // Lower score for low crime rate
        score -= crimeScore * weights.crimeWeight;
    } else if (crimeScore > 55) {
        // Higher score for high crime rate
        score += crimeScore * weights.crimeWeight * 2;
    } else {
        // Neutral scoring for moderate crime rate
        score += crimeScore * weights.crimeWeight;
    }

    // Score for Airbnb price - lower price gets lower score
    let airbnbScore = item.airbnbAveragePricePerNight ? parseFloat(item.airbnbAveragePricePerNight) : 0;
    score += airbnbScore * weights.airbnbWeight;

    // Score for ticket price - lower price gets lower score
    let ticketPrice = item.distance ? calculateLogarithmicTicketPrice(item.distance) : 0;
    score += ticketPrice * weights.ticketPriceWeight;

    return score;
}

function calculateScoresAndRanks() {
    window.dataArray.forEach(item => {
        item.score = calculateScore(item);
    });

    // Sort data based on score in ascending order (lower score is better)
    window.dataArray.sort((a, b) => a.score - b.score);

    // Assign ranks based on the sorted order
    window.dataArray.forEach((item, index) => {
        item.rank = index + 1;
        console.log(`City: ${item.city}, Score: ${item.score}, Rank: ${item.rank}`); // Debugging line
    });
}

let currentSort = {
    field: '',
    order: ''
};

function populateTable(data) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach((item) => {
        let row = tableBody.insertRow();

        // Rank
        let cellRank = row.insertCell();
        cellRank.setAttribute('data-label', 'Rank');
        cellRank.className = 'col-rank';
        cellRank.textContent = item.rank;

        // City
        let cellCity = row.insertCell();
        cellCity.setAttribute('data-label', 'City');
        cellCity.className = 'col-city';
        cellCity.textContent = item.city;

        // Country
        let cellCountry = row.insertCell();
        cellCountry.setAttribute('data-label', 'Country');
        cellCountry.className = 'col-rank';
        cellCountry.textContent = item.country;

        // Crime Index
        let cellCrimeIndex = row.insertCell();
        cellCrimeIndex.setAttribute('data-label', 'Crime Index');
        cellCrimeIndex.className = 'col-crime-index';
        cellCrimeIndex.textContent = item.crimeIndex;

        // Temperature
        let cellTemp = row.insertCell();
        cellTemp.setAttribute('data-label', 'Temperature (°C / °F)');
        cellTemp.className = 'col-temperature';
        cellTemp.textContent = item.tempInDegrees;

        // Airbnb Price
        let cellAirbnbPrice = row.insertCell();
        cellAirbnbPrice.setAttribute('data-label', 'Airbnb Price (USD/Night)');
        cellAirbnbPrice.className = 'col-airbnb';
        cellAirbnbPrice.textContent = item.airbnbAveragePricePerNight;

        // Country Index Used
        let cellCountryIndexUsed = row.insertCell();
        cellCountryIndexUsed.className = 'col-index-used';
        cellCountryIndexUsed.setAttribute('data-label', 'Country Index Used');
        cellCountryIndexUsed.textContent = item.isCountryCrimeIndex ? 'Yes' : 'No';

        // Distance
        let cellDistance = row.insertCell();
        cellDistance.className = 'col-distance';
        cellDistance.setAttribute('data-label', 'Distance (km)');
        cellDistance.textContent = item.distance ? item.distance.toFixed(2) + ' km' : 'Not calculated';

        // Estimated Airplane Ticket Price
        let cellTicketPrice = row.insertCell();
        cellTicketPrice.className = 'col-ticket-price';
        cellTicketPrice.setAttribute('data-label', 'Estimated Airplane Ticket Price');
        let ticketPrice = "Not calculated";
        if (item.distance && !isNaN(item.distance)) {
            ticketPrice = calculateLogarithmicTicketPrice(item.distance).toFixed(2) + ' USD';
        }
        cellTicketPrice.textContent = ticketPrice;
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
  
