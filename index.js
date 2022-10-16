// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementer(n) {
//     return function(num) {
//         return n + num
//     } 
// }

// const addOne = createIncrementer(1)
// const addTen = createIncrementer(10)

// console.log(addOne(10))
// console.log(addOne(41))
// console.log(addTen(10))
// console.log(addTen(41))

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vkontakte'))