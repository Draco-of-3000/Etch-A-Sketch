// Create a container element
const container = document.querySelector('#grid');


// Set the container's display property to 'grid'
container.style.display = 'grid';

// Set the container's grid-template-columns and grid-template-rows
// properties to create a 16x16 grid of square cells
container.style.gridTemplateColumns = 'repeat(16, 16px)';
container.style.gridTemplateRows = 'repeat(16, 16px)';


// Create 256 div elements to fill the grid
for (let i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
}

console.log(container)