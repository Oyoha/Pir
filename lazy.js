'use strict'

const list = [1,2,3,4,5]
// console.log(...list)

// list.map(x => x + 1)


const getLazy = (obj) => {
    const iterator = typeof obj.next === "function"
        ? obj 
        : obj[Symbol.iterator]()

    return new Proxy(
        obj,
        {
            get(_, prop) {
                switch (prop){
                    case "map":
                        return predicate => {
                            return getLazy({
                                [Symbol.iterator]() {return this},
                                index:0,
                                next(){
                                    const {value, done} = iterator.next()
                                    if (done) {
                                        return {done}
                                    } else {
                                        return { done, value: predicate(value, this.index++ )}
                                    }
                                }
                            })
                        }
                        break
                    case "filter":
                        return predicate => {
                            return getLazy({
                                [Symbol.iterator]() { return this },
                                next() {
                                    let result
                                    do {
                                        result = iterator.next()
                                        if (result.done) {
                                            return result
                                        }
                                    } while (!predicate(result.value))
                                    return result
                                }
                            })
                        }
                        break
                    case "take":
                        return (count) => {
                            return getLazy({
                                [Symbol.iterator]() {return this},
                                count,
                                next() {
                                    return this.count-- ? iterator.next() : {done: true}
                                }
                            })
                        }
                        break
                    default:
                        return Reflect.get(...arguments)
                }
            }
        }
    )
}

// const getLazy = (obj) => {
//     const iterator = typeof obj.next === "function"
//         ? obj 
//         : obj[Symbol.iterator]()

//     function* lazyGenerator() {
//         let index = 0
//         let result

//         while (!(result = iterator.next()).done) {
//             yield result.value
//         }
//     }

//     return new Proxy(
//         obj,
//         {
//             get(_, prop) {
//                 switch (prop){
//                     case "map":
//                         return predicate => {
//                             return getLazy((function* () {
//                                 for (const value of lazyGenerator()) {
//                                     yield predicate(value, index++)
//                                 }
//                             })())
//                         }
//                     case "filter":
//                         return predicate => {
//                             return getLazy((function* () {
//                                 for (const value of lazyGenerator()) {
//                                     if (predicate(value)) {
//                                         yield value
//                                     }
//                                 }
//                             })())
//                         }
//                     case "take":
//                         return (count) => {
//                             return getLazy((function* () {
//                                 let taken = 0
//                                 for (const value of lazyGenerator()) {
//                                     if (taken < count) {
//                                         yield value
//                                         taken++
//                                     } else {
//                                         break
//                                     }
//                                 }
//                             })())
//                         }
//                     default:
//                         return Reflect.get(...arguments)
//                 }
//             }
//         }
//     )
// }

console.log(
    ...getLazy(list)
        .map(x => console.log("map 1") || x + 10)
        .map(x => console.log("map 2") || x + 1)
        .filter(x => x % 2 === 0)
        .map((x, i) => {
            if(i == 3){
                throw "Oops"
            } else return x
        })
        .take(3)
        .map(x => console.log("map 3") || x ** 2)
)

const endlessIterator = {
    value: 0,
    next() {
        return {value: this.value++, done: false}
    }
}

console.log(...getLazy(endlessIterator).filter(x => x % 2 === 0).map(x => x ** 2).take(10))