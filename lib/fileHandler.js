const fs = require('fs');
const path = require('path');

function saveSVGToFile(svgContent, fileName) {
  const examplesDir = path.join(__dirname, '..', 'Examples'); 
  const filePath = path.join(examplesDir, fileName);

  try {
    fs.writeFileSync(filePath, svgContent);
    console.log(`Saved ${fileName} to Examples folder.`);
  } catch (err) {
    console.error(`Error saving ${fileName}:`, err);
  }
}

module.exports = saveSVGToFile;


