


import('inquirer').then(({ default: inquirer }) => {
    
  
    
    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function(value) {
          return value.length <= 3 ? true : 'Please enter up to three characters.';
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal):',
        default: 'black'
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['triangle', 'circle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal):',
        default: 'black'
      }
    ];
  
    
    inquirer.prompt(questions).then(answers => {
      const { text, textColor, shapeType, shapeColor } = answers;
  
      
      const generateSVG = require('./lib/svgGenerator');
      const saveSVGToFile = require('./lib/fileHandler');
  
      const svgContent = generateSVG(text, textColor, shapeType, shapeColor);
      const fileName = 'logo.svg';
  
      saveSVGToFile(svgContent, fileName);
  
      console.log(`Generated ${fileName}`);
    }).catch(error => {
      console.error('Error:', error);
    });
  
  }).catch(err => {
    console.error('Failed to load inquirer:', err);
  });
  
