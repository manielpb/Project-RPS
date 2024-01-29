let options = [ 'rocks', 'paper', 'scissors']

let random = Math.floor(Math.random()* options.length)
console.log(options[random])

function getComputerChoice (){
    return random
}