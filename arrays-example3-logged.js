// below logs are shown as output by node

const arr1 = new Array(3)
console.log(arr1)
// [ <3 empty items> ]

const arr2 = new Array(3)
arr2[1] = undefined
console.log(arr2)
// [ <1 empty item>, undefined, <1 empty item> ]
