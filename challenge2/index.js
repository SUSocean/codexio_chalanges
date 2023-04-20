// lets imagine that garden is represented as an array that contains rows represented as an array 
// every row can have a carrot represented as 1 and nothing represented as 0
// carrots must be placed in a square for code to work

let garden = [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0]
]

let numRows = garden.length
let numJumps = 0
let carrotCoords = []

// here I go through every row and take the coordinats(indaxes) of every carrot and push it in carrotCoords

for (let rows = 0; rows < numRows; rows++) {
    carrotCoords[rows] = []
    let rowAsString = garden[rows].toString().split(',').join('')
    let currentStringCarrotCoord = []
    for (let i = 0; i < rowAsString; i++) {
        if (rowAsString[i] === '1') {
            currentStringCarrotCoord.push(i)
        }
    }

    //  here I devide carrots to packs and turn them to strings which will allow me to compare them easely later

    for (let i = 0; i < currentStringCarrotCoord.length; i++) {
        if (currentStringCarrotCoord[i + 1] - currentStringCarrotCoord[i] == 1) {
            let thisPack = currentStringCarrotCoord[i].toString() + currentStringCarrotCoord[i + 1].toString()
            carrotCoords[rows].push(thisPack)
        }
    }
}

// here I go through every row and check if there is a carrot on the same coordinates and increment numJumps for every pack
for (let i = 0; i < carrotCoords.length; i++) {
    for (let b = 0; b < carrotCoords[i].length; b++) {
        if (carrotCoords[i + 1]) {
            if (carrotCoords[i + 1].includes(carrotCoords[i][b])) {
                numJumps++
            }
        }

    }
}

console.log(numJumps)
