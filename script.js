// Create 16x16 grid of square divs

const grid = document.querySelector(".grid-container");

// Number of rows and divs per row
const totalRows = 16;
const totalDivs = 16; 

// Create a div container for each row
for (let i = 0; i < totalRows; i++)
{
    const row = document.createElement("div");

    // Create the divs for current row
    for (let j = 0; j < totalDivs; j++)
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

// Change the color of a square div when the mouse passes over it

grid.addEventListener("mouseover", event => {

    const squareDiv = event.target;
    
    // Discard elements that are not square divs
    if (squareDiv.className === "square-div")
    {
        squareDiv.style.backgroundColor = "black";
    }
})
