
const canvas = document.querySelector("#canvas_2")
const sizeOutput = document.querySelector("#size-output")
const sizeInput = document.querySelector("#size")
const color = document.querySelector("#color")
const clearBtn = document.querySelector("#clear-btn")
const ctx = canvas.getContext("2d")
let drawing = false
const mouse = {
    x: null,
    y: null
}
canvas.width = window.innerWidth
canvas.height = window.innerHeight


window.addEventListener("resize", () => {
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
})


canvas.addEventListener("mousedown", () => {
    drawing = true
})

canvas.addEventListener("mouseup", (event) => {
    drawing = false
})


canvas.addEventListener("mousemove", (event) => {

    mouse.x = event.x
    mouse.y = event.y

    if (drawing) {

        draw()
    }
   
})

canvas.addEventListener("click", () => {

    draw()  
})

function showOutput() {
    sizeOutput.value = sizeInput.value
}

function sizeInputChanges(e) {
    e = document.getElementById("size")
    const min = e.min
    const max = e.max
    const val = e.value

    e.style.backgroundSize = (val - min) * 100 / (max - min) + "% 100%"

}

function draw() {
    ctx.beginPath()
    ctx.fillStyle = color.value
    ctx.arc(mouse.x, mouse.y, sizeInput.value, 0, Math.PI * 2)
    ctx.fill()
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

sizeInput.addEventListener("input", showOutput)
sizeInput.addEventListener("input", sizeInputChanges)
clearBtn.addEventListener("click", clearCanvas)








