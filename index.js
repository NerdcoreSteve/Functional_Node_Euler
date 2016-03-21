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

let fibanaci_list = (end_condition) => {
    let fibanaci_list_recursive = (list, end_condition) => {
        if(!end_condition(list)) {
            return fibanaci_list_recursive(list.concat([fibanaci(list.length)]), end_condition)
        } else {
            return list
        }
    }
    return fibanaci_list_recursive([], end_condition)
}

let fibanaci_sum = () =>
    _.chain(fibanaci_list((list) => _.last(list) > 4000000)).filter((num) => num % 2 === 0).sum().value()

console.log(fibanaci_sum())
