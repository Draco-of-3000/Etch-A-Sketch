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

let cells = document.querySelectorAll('#grid div'); // Select all cells in grid 

// Create 256 div elements to fill the grid
for (let i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
}

// Function to apply hover effect to cells
function applyHoverEffect() {
    // Select all cells in grid
    const cells = document.querySelectorAll('#grid div');
  
    // Add mouseover event listener to cells
    cells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.classList.add('hovered'); // Add hovered class to cells in when hovered upon
        });
    });
};

// Function to apply RGB hover effect to cells
function applyRGB() {
    // Select all cells in grid
    const cells = document.querySelectorAll('#grid div');
  
    // Add mouseover event listener to cells
    cells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            // Generate random values for Red, Green, and Blue (RGB)
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            event.target.classList.add('hovered'); // Add hovered class to cells in when hovered upon
            event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
};


// Function to apply RGB hover effect
function hoverRGB () {
    // Generate random values for Red, Green, and Blue (RGB)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Construct and return the random color as an RGB string
    return `rgb(${r}, ${g}, ${b})`;
};

//Function to reset grid
function resetGrid() {
    // Code to remove hover effect
    reset.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.classList.remove('hovered');
        });

        // Reset the grid template columns and rows to create a 16x16 grid
        container.style.gridTemplateColumns = 'repeat(16, 50px)';
        container.style.gridTemplateRows = 'repeat(16, 50px)';

        // Remove all cells from the grid
        container.innerHTML = '';

        // Create a new 16x16 grid
        for (let i = 0; i < 256; i++) {
            const cell = document.createElement('div');
            container.appendChild(cell);
            applyHoverEffect();
        }
    });
};

// Function to resize grid
function resizeGrid () {
    // Code to prompt user for squares per size
    resizeButton.addEventListener('click', () => {
        //Prompt user for squares per side
        const squaresPerSide = prompt('Enter the number of squares per side for the new grid maximum 100');
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

        // Re-apply hover effect to cells
        applyHoverEffect();  
    });
};

// Apply hover effect to cells
applyHoverEffect();

// When Reset button is clicked
const reset = document.querySelector('#reset'); 
reset.addEventListener('click', resetGrid);

// When Resize button is clicked
const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', resizeGrid);

// When RGB Mode button is clicked
const rgbMode = document.querySelector('#RGB');
rgbMode.addEventListener('click', applyRGB);
















