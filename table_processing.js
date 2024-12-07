const table1Data = [
    { index: 'A1', value: 41 }, { index: 'A2', value: 18 }, { index: 'A3', value: 21 },
    { index: 'A4', value: 63 }, { index: 'A5', value: 2 },  { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },  { index: 'A8', value: 57 }, { index: 'A9', value: 60 },
    { index: 'A10', value: 93 }, { index: 'A11', value: 28 }, { index: 'A12', value: 3 },
    { index: 'A13', value: 90 }, { index: 'A14', value: 39 }, { index: 'A15', value: 80 },
    { index: 'A16', value: 88 }, { index: 'A17', value: 49 }, { index: 'A18', value: 60 },
    { index: 'A19', value: 26 }, { index: 'A20', value: 28 }
];

function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId);
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.index || row.category}</td><td>${row.value}</td>`;
        tableBody.appendChild(tr);
    });
}

function calculateTable2Values() {
    const getValue = index => table1Data.find(row => row.index === index).value;

    return [
        { category: 'Alpha', value: getValue('A5') + getValue('A20') },
        { category: 'Beta', value: Math.floor(getValue('A15') / getValue('A7')) },
        { category: 'Charlie', value: getValue('A13') * getValue('A12') }
    ];
}

populateTable('table1', table1Data);
populateTable('table2', calculateTable2Values());