/*const numbers = [1, 2, 3]
console.log(numbers)

numbers.push(4)
console.log(numbers)

const numbers = [1, 2, 3]
console.log(numbers)
/*const newNumbers = [...numbers, 4]
console.log(newNumbers)
const newNumbers = [...numbers]
numbers.push(4)

console.log(newNumbers)
console.log(numbers)*/
/*
const person = {
    name: 'Kertu'
}

const uusPerson = {
    ...person,
        age: 25
}
console.log(person)
console.log(uusPerson) */

const filter = (args) => {
    return args.filter(el => el === 1)
}

console.log(filter([1, 2, 3, 4, 1]))