'use strict'

let _ = require('lodash')

let multiples_sum =
    () => _.chain(1).range(1000).filter((num)=> num % 3 === 0 || num % 5 === 0).sum().value()

console.log("The sum of all the multiples of 3 or 5 below 1000.", multiples_sum())
