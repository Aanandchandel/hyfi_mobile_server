const fs = require('fs');
const path = require('path');

// Function to get list of files in a directory
function getFilesInDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    // Read the contents of the directory
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      // Array to store file objects
      const fileList = [];

      // Iterate through the files
      files.forEach(file => {
        // Get the full path of the file
        const fullPath = path.join(directoryPath, file);

        // Get file stats
        fs.stat(fullPath, (err, stats) => {
          if (err) {
            reject(err);
            return;
          }

          // If it's a file, add it to the fileList array
          if (stats.isFile()) {
            const fileInfo = {
              name: file,
              type: path.extname(file).substring(1), // Remove the dot from the extension
              path: fullPath
            };
            fileList.push(fileInfo);
          }

          // Check if all files have been processed
          if (fileList.length === files.length) {
            resolve(fileList);
          }
        });
      });
    });
  });
}

module.exports={getFilesInDirectory}