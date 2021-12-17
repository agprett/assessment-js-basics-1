const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Welcome to the password validator!')

reader.question("Please input a password? ", function(input) {
  if(input.length >= 10){
    console.log('Password accepted')
  } else {
    console.log('You need to hit the gym, your password is too weak')
  }
  
  reader.close()
})