# simple-image-paginator-api
to test loading image with skip and top to test in frontend

1. clone the project
2. run "npm i"
3. run "node server.js"

4. fetch('http://localhost:3000/posts')

## now you can use it on port 3000
### before use check cors policy , you can change *localhost:4200* to any other url



here is sample result
```
[
    {
        "id": 1,
        "title": "Post 1",
        "imageUrl": "https://random.imagecdn.app/500/150"
    },
    {
        "id": 2,
        "title": "Post 1",
        "imageUrl": "https://random.imagecdn.app/500/150"
    },
    {
        "id": 3,
        "title": "Post 1",
        "imageUrl": "https://source.unsplash.com/random/200x200?sig=1"
    },
    {
        "id": 4,
        "title": "Post 1",
        "imageUrl": "https://source.unsplash.com/random/200x200?sig=2"
    },
    {
        "id": 5,
        "title": "Post 1",
        "imageUrl": "https://source.unsplash.com/random/200x200?sig=3"
    },
    {
        "id": 6,
        "title": "Post 1",
        "imageUrl": "https://loremflickr.com/320/240"
    },
    {
        "id": 7,
        "title": "Paris",
        "imageUrl": "https://loremflickr.com/g/320/240/paris"
    },
    {
        "id": 8,
        "title": "Brazil",
        "imageUrl": "https://loremflickr.com/320/240/brazil"
    },
    {
        "id": 9,
        "title": "Girl",
        "imageUrl": "https://loremflickr.com/320/240/girl"
    },
    {
        "id": 10,
        "title": "Boy",
        "imageUrl": "https://loremflickr.com/320/240/boy"
    }
]
```
