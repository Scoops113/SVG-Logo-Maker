const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(text, textColor, shapeType, shapeColor) {
  let shape;

  switch (shapeType) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape type');
  }

  shape.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
    </svg>
  `;

  return svgContent.trim();
}

module.exports = generateSVG;
