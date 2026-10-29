// Generates a grid of square divs of given size
function generateGrid(gridSize)
{
    const grid = document.querySelector(".grid-container");

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

            // Append div to current row container
            row.appendChild(newDiv);
        }

        // Add a class to current row container
        row.classList.add("div-row");

        // Append row to grid container
        grid.appendChild(row);
    }
}

// Generate "default" grid
const defaultSize = 16;
generateGrid(defaultSize);

// Change the color of a square div when the mouse passes over it
const grid = document.querySelector(".grid-container");
grid.addEventListener("mouseover", event => {

    const squareDiv = event.target;
    
    // Discard elements that are not square divs
    if (squareDiv.className === "square-div")
    {
        squareDiv.style.backgroundColor = "black";
    }
})

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
})
