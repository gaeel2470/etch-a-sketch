// Generates a grid of square divs of given size
function generateGrid(gridSize)
{
    const grid = document.querySelector(".grid-container");

    // Determine the dimensions of each square div to fit the 800x800 pixel grid
    const gridDimensions = 800;
    const divDimensions = gridDimensions / gridSize;

    // Create a div container for each row
    for (let i = 0; i < gridSize; i++)
    {
        const row = document.createElement("div");

        // Create the divs for current row
        for (let j = 0; j < gridSize; j++)
        {
            const newDiv = document.createElement("div");

            // Add a class to created div
            newDiv.classList.add("square-div");

            // Change the dimensions of the square div
            newDiv.style.width = `${divDimensions}px`;
            newDiv.style.height = `${divDimensions}px`

            // Append div to current row container
            row.appendChild(newDiv);
        }

        // Add a class to current row container
        row.classList.add("div-row");

        // Append row to grid container
        grid.appendChild(row);
    }

    // Change color of square divs when the mouse passes over them
    grid.addEventListener("mouseover", colorSquareDiv)
}

// Changes the color of square divs
function colorSquareDiv(event)
{
    const squareDiv = event.target;

    // Discard elements that are not square divs
    if (squareDiv.className === "square-div")
    {
        squareDiv.style.backgroundColor = "black";
    }
}

// Generate "default" grid
const defaultSize = 16;
generateGrid(defaultSize);

// When clicked prompt the user for the size of the new grid, delete current grid and generate the new one
const generateGridButton = document.querySelector(".generate-grid");
generateGridButton.addEventListener("click", () => {

    // Prompt user for size
    let gridSize = prompt("Please enter the number of squares per side (Max is 100)", 16);

    // Stop if user clicks cancel
    if (!gridSize) return;

    // Keep prompting until a valid value is entered
    while (!Number.isInteger(+gridSize) || gridSize < 1 || gridSize > 100)
    {
        gridSize = prompt("Please enter a number between 1 and 100", 16);

        // Stop if user clicks cancel
        if (!gridSize) return;
    }

    // Delete current grid
    const currentGrid = document.querySelector(".grid-container");
    currentGrid.remove();

    // The whole container was also deleted, create a new one and append it before generating new grid
    const newGrid = document.createElement("div");
    
    const mainContainer = document.querySelector(".main-container");
    mainContainer.append(newGrid);

    // Add class to keep CSS styles and match with generateGrid function
    newGrid.classList.add("grid-container");

    // Generate new grid 
    generateGrid(+gridSize);
})
