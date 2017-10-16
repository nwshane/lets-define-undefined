const obj1 = {}

for (key in obj1) {
  console.log('obj1.' + key + ':', obj1[key])
}

const obj2 = {}
obj2.my_prop = undefined

for (key in obj2) {
  console.log('obj2.' + key + ':', obj2[key])
}
