function getId(currentTodos) {
  let arr = JSON.parse(currentTodos)
  arr = arr.map(item => item.id)
  for (let i = 0; i < 999; i++) {
    if (arr.includes(i) === false) {
      return i
    }
  }
}

/*Transforms the localstorage stringified JSON back to an array, transforms it just into an array of id's instad of an array of objects. Then it counts numbers from 0 to 999. If a number is find that isn't included in the array (no todo has that id), then it returns.*/

export default getId