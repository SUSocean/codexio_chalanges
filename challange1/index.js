const input = document.getElementById('input')
const button = document.getElementById('button')
const result = document.getElementById('result')
let box = {
}
let allBalls = 0


button.addEventListener('click', () => {
    // checking if input is 'End' or a new ball value'
    if (input.value == 'End') {
        // if input is 'End' displaying the result
        result.textContent = calculateResult()
    } else {
        // if input is a new ball it is added to the box object
        let [color, count] = input.value.split(': ')
        box[color] = parseInt(count)
        input.value = ''
    }
})

function calculateResult() {
    // summing up all balls values together in allBalls 
    for (color in box) {
        allBalls += box[color]
    }
    // making result equal to allballs for future comparison
    let result = allBalls
    // itterating thorough box and comparing each the result of keeping each color in the box. Smaller number wins and is being retirned
    for (color in box) {
        let howMuchBallsTaken = getHowMuchBallsTaken(color)
        if (howMuchBallsTaken < result) {
            result = howMuchBallsTaken
        }
    }
    return result
}

// put that function away for better readability
function getHowMuchBallsTaken(color) {
    return allBalls - box[color]
}

