# What is Closure? How does it work?

That is a function inside another function

# CASE 
Create the function which generate URL

```
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

```
