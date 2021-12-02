// vars
const sketchGrid = document.getElementById('sketchGrid')
const resetBtn = document.getElementById('resetBtn')
const gridRange = document.getElementById('gridSize')
const rangeValue = document.getElementById('rangeValue')
let gridBlockDimensions = gridRange.value

// create initial grid
createGrid()

// listeners
gridRange.addEventListener('change', resetAndChangeGrid)
resetBtn.addEventListener('click', clearGrid)
gridRange.addEventListener('input', e => (rangeValue.innerText = e.target.value + ' px'))

// functions
function createGrid() {
    const gridContainerWidth = sketchGrid.offsetWidth
    const gridContainerHeight = sketchGrid.offsetHeight
    let counter = 0

    while (counter < gridBlockDimensions * gridBlockDimensions) {
        const div = document.createElement('div')
        div.style.width = gridContainerWidth / gridBlockDimensions + 'px'
        div.style.height = gridContainerHeight / gridBlockDimensions + 'px'
        sketchGrid.appendChild(div)
        applyHover(div)
        counter++
    }
}

function resetAndChangeGrid(range) {
    gridBlockDimensions = Number(range.target.value)
    clearGrid()
    createGrid()
}

function applyHover(element) {
    element.addEventListener(
        'mouseover',
        e => {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
            element.style.backgroundColor = randomColor
        },
        {
            once: true
        }
    )
}

function clearGrid() {
    gridBlockDimensions = gridRange.value
    let child = sketchGrid.lastElementChild
    while (child) {
        sketchGrid.removeChild(child)
        child = sketchGrid.lastElementChild
    }
    createGrid()
}
