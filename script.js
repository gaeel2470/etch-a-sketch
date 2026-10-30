// Changes the color of a square div using random rgb values
function colorSquareDiv(event)
{
    const squareDiv = event.target;

    // Discard elements that are not square divs
    if (squareDiv.className === "square-div")
    {   
        // Get a random rgb value
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        // Color the square div
        squareDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

// Generates a grid of square divs that change color when the mouse passes over them
// The user can choose the number of squares per side (Maximum 100)
function generateGrid(numberOfSquares)
{   
    // Main container for the grid
    const grid = document.querySelector(".grid-container");

    // The gird should have a fixed size, the number of squares per side should not affect it
    // Adjust the dimensions of the square divs to fit on the grid
    const gridDimensions = 800;
    const squareDivDimensions = gridDimensions / numberOfSquares;

    // Create a div container for every row on the grid
    for (let i = 0; i < numberOfSquares; i++)
    {
        const gridRow = document.createElement("div");

        // Create the square divs for current row
        for (let j = 0; j < numberOfSquares; j++)
        {
            const squareDiv = document.createElement("div");

            // Add class to every squareDiv for later referencing
            squareDiv.classList.add("square-div");

            // Change the dimensions of the square div
            squareDiv.style.width = `${squareDivDimensions}px`;
            squareDiv.style.height = `${squareDivDimensions}px`

            // Append square div to current row container
            gridRow.appendChild(squareDiv);
        }

        // Add a class to current row container for CSS purposes
        gridRow.classList.add("grid-row");

        // Append row to grid container
        grid.appendChild(gridRow);
    }

    // Change the color of square divs when the mouse passes over them
    grid.addEventListener("mouseover", colorSquareDiv)
}

// Generate a default 40x40 grid
const defaultSize = 40;
generateGrid(defaultSize);

// When this button is clicked, prompt the user for the number of squares per side on the new grid
// Delete current grid and then generate a new one using users input
const generateGridButton = document.querySelector(".generate-grid-btn");
generateGridButton.addEventListener("click", () => {

    // Prompt user for number of squares per side (Maximum will be 100 for performance sake)
    let numberOfSquares = prompt("Please enter the number of squares per side (Max is 100)", 40);

    // Stop if user clicks cancel
    if (!numberOfSquares) return;

    // Keep prompting until a valid value is entered
    while (!Number.isInteger(+numberOfSquares) || numberOfSquares < 1 || numberOfSquares > 100)
    {   
        // Remind user about correct usage
        numberOfSquares = prompt("Please enter a number between 1 and 100", 40);

        // Stop if user clicks cancel
        if (!numberOfSquares) return;
    }

    // Delete current grid
    const currentGrid = document.querySelector(".grid-container");
    currentGrid.remove();

    // The whole container was also deleted, create a new one and append it before generating the new grid
    const newGrid = document.createElement("div");
    
    const mainContainer = document.querySelector(".main-container");
    mainContainer.append(newGrid);

    // Add class to keep CSS and later referencing
    newGrid.classList.add("grid-container");

    // Generate new grid 
    generateGrid(+numberOfSquares);
})
