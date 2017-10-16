const arr1 = new Array(3)

arr1.forEach((val, i) => {
  console.log(`arr1 ${i}. ${val}`)
})

const arr2 = new Array(3)
arr2[1] = undefined

arr2.forEach((val, i) => {
  console.log(`arr2 ${i}. ${val}`)
})
