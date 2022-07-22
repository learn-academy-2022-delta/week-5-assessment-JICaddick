// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"

describe("codifies words", () => {
    it("a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(codifier(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codifier(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codifier(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
  
// b) Create the function that makes the test pass.

// pseudocode 
// Write a hof (codifier) that takes in a string as a parameter.
// split string into array using .split
// introduce .map and give it a param 'letter'
// Write conditional statements to identify the letters I want to change and switch them for 
// return array re-joined using .join("")

const codifier = (string) => {
    return string.split('').map(letter => {
        if (letter === 'a' || letter ==='A') {
            return 4
        } else if (letter === 'e'|| letter ==='E') {
            return 3
        } else if (letter === 'o' || letter ==='O') {
            return 0
        } else if (letter === 'i' || letter ==='I') {
            return 1
        } else {
            return letter
        }
    }).join("")
}

// The above code works- the following was my first attempt. 


// const codifier = (string) => {
//     let result = string.split('')
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] = 'a') {
//             string[i].replace('a', 4)
//         } else if (string[i] = 'e') {
//             string[i].replace('e', 3)
//         } else if (string[i] = 'o'); {
//             string[i].replace('o', 0)
//         } 
//     }
//     return result.join('')
// }


// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// // a) Create a test with expects statement using the variable provided.


const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
const letterE = "e"


  describe("Finds array elements containing particular letter", () => {
      it("a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {

      expect(hasTheLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(hasTheLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

// b) Create the function that makes the test pass.

// Write a hof (hasTheLetter) that takes in an array and a letter variable as parameters.
// map over the array using .filter to remove the words in the array that don't include the relevant letters
// use .to_LowerCase to check all the letters in the words in the array
//.includes() to return only tjhe remaining words. 


const hasTheLetter = (array, letter) => {
    return array.filter(filteredLetter => {
            return filteredLetter.toLowerCase().includes(letter)
    })
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("identifies full houses", () => {
    it("a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind." , () => {
    expect(isFullHouse(hand1)).toEqual(true)
    expect(isFullHouse(hand2)).toEqual(false)
    expect(isFullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.
// Write a hof (isFullHouse)
// map over the array with .map
// use .includes() letterA
// if [i]0 === [i]1 === [i]2 === && [i]3 === [i]4 || if [i]0 === [i]1 && [i]2 === [i]3 === [i]4 return true (lol)

const isFullHouse = (array) => {
    array.sort((a, b) => a - b)
        if(array[0] === array[1] && array[1] === array[2] && array[3] === array[4]) {
                return true
            } else if(array[0] === array[1] && array[2] === array[3] && array[3] === array[4]) {
                return true
            }
            else {
                return false
            }
        }

// The pseudo lol was for the length of the original if statement I trialed- needless to say it didn't work. - Knew I was on the right track with it though