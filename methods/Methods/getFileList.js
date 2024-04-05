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

      // Array to store promises for file stats
      const promises = [];

      // Iterate through the files
      files.forEach(file => {
        // Get the full path of the file
        const fullPath = path.join(directoryPath, file);

        // Create a promise for getting file stats
        const statPromise = new Promise((resolveStat, rejectStat) => {
          // Get file stats
          fs.stat(fullPath, (err, stats) => {
            if (err) {
              rejectStat(err);
              return;
            }

            // If it's a file, resolve with file info
            if (stats.isFile()) {
              const fileInfo = {
                name: file,
                type: path.extname(file).substring(1), // Remove the dot from the extension
                path: fullPath
              };
              resolveStat(fileInfo);
            } else {
              // If it's not a file, resolve with null
              resolveStat(null);
            }
          });
        });

        promises.push(statPromise);
      });

      // Wait for all promises to resolve
      Promise.all(promises)
        .then(fileInfos => {
          // Filter out null values (directories)
          const fileList = fileInfos.filter(info => info !== null);
          resolve(fileList);
        })
        .catch(reject);
    });
  });
}

module.exports = { getFilesInDirectory };
