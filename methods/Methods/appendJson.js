const fs = require('fs');
const path = require('path');

function appendJson(filePath, newData) {
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('Error checking file status:', err);
            return;
        }

        if (!stats.isFile()) {
            console.error('Error: The specified path is not a file.');
            return;
        }

        fs.readFile(filePath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading file:', readErr);
                return;
            }

            let jsonData;
            try {
                jsonData = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                return;
            }

            jsonData.push(newData);

            const updatedJsonData = JSON.stringify(jsonData, null, 2);

            fs.writeFile(filePath, updatedJsonData, 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error('Error writing file:', writeErr);
                    return;
                }
                console.log('Data appended successfully!');
            });
        });
    });
}



module.exports={appendJson}