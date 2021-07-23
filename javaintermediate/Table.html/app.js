(() => {
    let x = 3;
    var y = 4;

})();

let conatiner = document.querySelector("#container");

function createTableHeaderRow(headers){
const headerRow = document.createElement("tr");

for (const headerText of headers) {
    const header = document.createElement("th");
    header.innerText = headerText;

    headerRow.appendChild(header);
}
return headerRow;
}
function createTableDataRow(data) {
    const dataRow = document.createElement("tr");

    for (const dataItem of data) {
        const dataElement = document.createElement("td");
        dataElement.innerText = dataItem;
        dataRow.appendChild(header);
    }
    return dataRow;
}
function createTable(headers, data) {
    const headerRow = createTableHeaderRow(headers);
    const dataRows = [];

    for (const dataSet of data) {
      
        dataRows.push(createTableDataRow(dataSet));
    }
    const table = document.createElement("table");
    table.appendChild(headerRow);
    for (dataRow of dataRows) {
        table.appendChild(dataRow);
    }

    return table;
}

const headers = ["Forename", "Surname", "Age"];
const data = [
["meg", "Crouch", "24"],
["Niall", "Duggan", "25"]
["Simon", "White", "21"]
];

const table = createTable(headers, data);
conatiner.appendChild(table);