const obj1 = {}
console.log(obj1.propertyIsEnumerable('my_prop'))
// => false

const obj2 = {}
obj2.my_prop = undefined

console.log(obj2.propertyIsEnumerable('my_prop'))
// => true
