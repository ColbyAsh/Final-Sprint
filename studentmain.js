// main.js
console.log("Hello from main.js!");

fetch('studentdata.json')
        .then(response => response.json())
    .then(jsonData => {
        data = jsonData; // Assign data globally
        console.log(data);
        // Call a function to process the data (Step 4 and 5)
        processJSONData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function processJSONData(data) {
    data.records.forEach(record => {
        console.log(`Name: ${record.name}`);
        // Displaying in the browser console
        displayInConsole(`Age: ${record.age}`);
    });
}


    function displayInConsole(message) {
        console.log(message);
    }
    
    function displayInHTML(message) {
        const outputDiv = document.createElement('div');
        outputDiv.textContent = message;
        document.body.appendChild(outputDiv);
    }
    
    function describeJSONData(data) {
        let description = "JSON Data:\n";
        data.records.forEach(record => {
            description += `ID: ${record.id}, Name: ${record.name}, Age: ${record.age}\n`;
        });
        return description;
    }
    
    // Call these functions
    const jsonDataDescription = describeJSONData(data);
    displayInConsole(jsonDataDescription);
    displayInHTML(jsonDataDescription);