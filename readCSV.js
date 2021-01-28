async function getData() {
    console.log('2 - START ASYNC DATA RETRIEVAL');
    const response = await fetch("csvFile.csv");
    console.log('3 - START ASYNC DATA CONVERSION TO TEXT');
    const data = await response.text();
    console.log('4 - SPLIT DATA INTO COLUMNS');
    const table = data.split('\n').slice(1);

    table.forEach(row => {
        const columns = row.split(',');
        const name = columns[0];
        const age = columns[1];
        const gender = columns[2];
        console.log('      ', name, age, gender);
    })

    console.log('5 - COMPLETE DATA RETRIEVAL');
}

console.log('1 - CALL AND LOG DATA RETRIEVAL');
getData();
console.log('6 - DATA RETRIEVAL COMPLETE', '\n');