
let fistWord = 'codewars'
let secondWord = 'hackerrank'

function getHowMuch(word1, word2) {
    // splitting words to arrays
    let sortedFirst = word1.split('')
    let sortedSecond = word2.split('')
    // this will represent number of the same lettes
    let numSmeLetters = 0
    // cheking every letter of fist word if there is the same in one the second word
    // adding to numSmeLetters if there is a match
    sortedFirst.forEach(letter => {
        if (sortedSecond.includes(letter)) {
            numSmeLetters++
        }
    })
    // summing up all lettrs and taking num of letter from them (miltiplying on tow since there are two words)
    return sortedFirst.length + sortedSecond.length - numSmeLetters * 2
}

console.log(getHowMuch(fistWord, secondWord))