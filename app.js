// 1. Zadatak
function addTwoNumbers(num1, num2){
    return num1 + num2
}
let zbir = addTwoNumbers(2, 4)
console.log(zbir)

// 2. Zadatak
function toggleColor() {
    const element = document.body;
    element.classList.toggle("black-bg")
}

// 3. Zadatak
const objects = [
  { name: "Lopta", color: "red" },
  { name: "Stol", color: "blue" },
  { name: "Daska", color: "blue" },
  { name: "Pernica", color: "white" },
]

function filterBlueObjects(objects){
    return objects.filter(object => object.color === "blue")
}
  
  const blueObjects = filterBlueObjects(objects)
  console.log(blueObjects)

// 4. Zadatak
const numbers = [12, 3, 4, 10]

function findSmallest(numbers){
  return numbers.reduce((acc, current) => {
    if (current < acc){
      return current
    }
    return acc
  }, numbers[0])
}

const smallest = findSmallest(numbers)
console.log(smallest)