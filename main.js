/*
// ===== CodeWars exercise #1 ====== //
*/
function likes(names) {
  let num_likes = names.length;
  switch(num_likes) {
      case 0:
        return("no one likes this")
        break
      case 1:
        return(`${names[0]} likes this`)
        break
      case 2:
        return(`${names[0]} and ${names[1]} like this`)
        break
      case 3:
        return(`${names[0]}, ${names[1]} and ${names[2]} like this`)
        break
      default:
        return(`${names[0]}, ${names[1]} and ${num_likes - 2} others like this`)
        break
        
  }
}

// ===== CodeWars Exercise #2 =======///

function solution(str){
  return str.split('').reverse().join('');  
}


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log('These are the favorite foods of person3: \n')
// list the values from the person3 oject that are arrays
for (let i = 0; i < Object.keys(person3).length; i++) {
  if (Array.isArray(Object.values(person3)[i])) 
   {
    console.log(`Types of ${Object.keys(person3)[i]}:`)
    for (let j = 0; j < Object.values(person3)[i].length; j++) 
    {
      if (typeof Object.values(person3)[i][j]  == "object" ) 
      {
        let internal_object = Object.values(person3)[i][j]
        for (const key in internal_object) 
        {
          console.log(`       ${key}: ${internal_object[key]}`)
      } 
      
    }else {console.log(`       ${Object.values(person3)[i][j]}`)} }  
  } 
  else { console.log(`Types of ${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)

  }}

  
 



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(age, name){
  this.name = name;
  this.age = age;

  // Use an arrow to create the printInfo method
  this.printInfo = () =>  {
    console.log(`${this.name} is ${this.age} years old.`)
  }
  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age  
  this.addAge = () => {
    this.age ++
  }
}

let terry = new Person(34, "Terry")

terry.printInfo()
terry.addAge()
terry.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLengthOverTen = (test_string) => {
  return new Promise( (resolve, reject) => {
      if (test_string.length > 10) {
          resolve(true)
      } else {
          reject(false)
      }
  } )
}

isLengthOverTen("having a good time")
.then( (result) => {
  console.log(`Big word`)
})

.catch( (error) => {
  console.log(`Small Number`)
}
)





