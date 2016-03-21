'use strict'

let _ = require('lodash')

let multiples_sum =
    () => _.chain(1).range(1000).filter((num)=> num % 3 === 0 || num % 5 === 0).sum().value()

console.log("The sum of all the multiples of 3 or 5 below 1000.", multiples_sum())

let fibanaci = _.memoize((index) => {
    if (index === 0) {
        return 0
    } else if (index === 1) {
        return 1
    } else {
        return fibanaci(index - 1) + fibanaci(index - 2)
    }
})

console.log(fibanaci(6))
