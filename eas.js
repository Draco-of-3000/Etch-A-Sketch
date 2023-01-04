// Select the container element for the grid
const container = document.querySelector('#grid');

// Set the container's width and height to be the same
// (i.e. create a square grid)
container.style.width = '800px';
container.style.height = '800px';

// Set the container's display property to 'grid'
container.style.display = 'grid';

// Set the container's grid-template-columns and grid-template-rows
// properties to create a 16x16 grid of square cells
container.style.gridTemplateColumns = 'repeat(16, 50px)';
container.style.gridTemplateRows = 'repeat(16, 50px)';


// Create 256 div elements to fill the grid
for (let i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
}


// Code for hover effect
let cells = document.querySelectorAll('#grid div'); // Select all cells in grid 
const reset = document.querySelector('#reset');       // Select reset button
const resizeButton = document.querySelector('#resize');     // Select resize button

cells.forEach(cell => {
    cell.addEventListener('mouseover', event => {
        event.target.classList.add('hovered'); // Add hovered class to cells in when hovered upon
    });
});

// Code to remove hover effect
reset.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.classList.remove('hovered');
    });
});

// Code to prompt user for squares per size
resizeButton.addEventListener('click', () => {
    //Prompt user for squares per side
    const squaresPerSide = prompt('Enter the number of squares per side for the new grid');
    const pixelSize = 800 / squaresPerSide;
  
    // Update the grid template columns and rows to match the new cell size
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${pixelSize}px)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${pixelSize}px)`;
  
    // Create a new grid with the specified number of squares per side
    container.innerHTML = '';
    for (let i = 0; i < squaresPerSide ** 2; i++) {
      const cell = document.createElement('div');
      container.appendChild(cell);
    }

    // Re-assign cells variable to a new NodeList of all div elements in the grid
    cells = document.querySelectorAll('#grid div');

    // Add mouseover event listener to the new set of cells
    cells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.classList.add('hovered'); // Add hovered class to cells in when hovered upon
        });
    });
   
    
});

