const { exec } = require('child_process');
const fs = require('fs');

fs.writeFileSync('newfile.txt', 'This is the content of the new file.');

exec('ls -1', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error.message}`); // Print the error message
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout.trim().replace(/\n/g, ', '));
});
