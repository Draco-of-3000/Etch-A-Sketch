// Srlrct the container element for the grid
const container = document.querySelector('#grid');

// Set the container's width and height to be the same
// (i.e. create a square grid)
container.style.width = '800px';
container.style.height = '800px';

// Set the container's display property to 'grid'
container.style.display = 'grid';

// Set the container's grid-template-columns and grid-template-rows
// properties to create a 16x16 grid of square cells
container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(50px, 1fr))';
container.style.gridTemplateRows = 'repeat(auto-fill, minmax(50px, 1fr))';


// Create 256 div elements to fill the grid
for (let i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
}


// Code for hover effect
const cells = document.querySelectorAll('#grid div');

cells.forEach(cell => {
    cell.addEventListener('mouseover', event => {
        event.target.classList.add('hovered');
    });
});