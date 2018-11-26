// https://restcountries.eu

let container = $('#container');

// Ajax Functions
function getAll() { // Get All Country List
    container.html('');
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all',
        method: 'GET',
        success: function (data) {
            drawSearch(data);
        },
        error: function () {
            console.log('error getting all')
        }
    });
}

function search() { // Get Searched Country
    container.html('');
    let searchTxt = $('#search-txt').val();

    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${searchTxt}`,
        method: 'GET',
        success: function (data) {
            drawSearch(data);
        },
        error: function () {
            container.html('<h2 class="err">Please Enter Valid Search Value</h2>');
        }
    });
}


// Render functions

// Draw Search result as table

function drawSearch(data) {
    tableHeader();
    tableRow(data);
}

function tableHeader() { // Create table header and append it to the table
    let table = $('<table id="table">');
    let header = $('<tr class="th">').html(`
        <th>Name</th>
        <th>Domain</th>
        <th>Capital</th>
        <th>Currencies</th>
        <th>Flag</th>
    `);
    table.append(header);
    container.append(table);
}

function tableRow(data) { // Create new row for each country and append it to the table
    let table = $('#table');

    for (let country of data) {
        let row = $('<tr>');
        row.html(`
            <td>${country.name}</td>
            <td>${country.topLevelDomain}</td>
            <td>${country.capital}</td>
            <td>${country.currencies[0].code}</td>
            <td><img src="${country.flag}" alt="Flag"></td>
        `);
        table.append(row);
    }
}

































