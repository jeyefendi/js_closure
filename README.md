# What is Closure? How does it work?

That is a function inside another function

# CASE 
Create the function which generate url

```
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
```
