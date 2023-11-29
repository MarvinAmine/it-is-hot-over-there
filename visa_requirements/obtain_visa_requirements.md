# How obtain visa requirements from one country for each other countries

## Using [wikipedia](https://en.wikipedia.org/wiki/Visa_requirements_for_French_citizens#:~:text=URL%3A%20https%3A%2F%2Fen) with this code:
```js
let tableRows = document.querySelectorAll("table.wikitable.sortable > tbody > tr");
let countryData = [];

tableRows.forEach(row => {
    let rowData = row.querySelectorAll("td");
    
    // Ensure rowData has enough elements
    if (rowData.length >= 3) {
        let country = rowData[0] ? rowData[0].textContent.trim().replace(/\[\d+\]/g, '') : "";
        let visaRequirement = rowData[1] ? rowData[1].textContent.trim().replace(/\[\d+\]/g, '') : "";
        let allowedStay = rowData[2] ? rowData[2].textContent.trim().replace(/\[\d+\]/g, '') : "";

        countryData.push({ country, visaRequirement, allowedStay });
    }
});

console.log(countryData);
``` 
