const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const posts =[
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
    },
    {
        "id": 11,
        "title": "random 1",
        "imageUrl": "https://loremflickr.com/320/240?random=1"
    },
    {
        "id": 12,
        "title": "random 2",
        "imageUrl": "https://loremflickr.com/320/240?random=2"
    },
    {
        "id": 13,
        "title": "random 3",
        "imageUrl": "https://loremflickr.com/320/240?random=3"
    },
    {
        "id": 14,
        "title": "Cat 1",
        "imageUrl": "https://loremflickr.com/g/320/240/cat"
    },
    {
        "id": 15,
        "title": "House",
        "imageUrl": "https://loremflickr.com/g/320/240/house"
    },
    {
        "id": 16,
        "title": "Animal",
        "imageUrl": "https://loremflickr.com/g/320/240/animal"
    },
    {
        "id": 17,
        "title": "Car",
        "imageUrl": "https://loremflickr.com/g/320/240/car"
    },
    {
        "id": 18,
        "title": "Place Dog",
        "imageUrl": "https://placedog.net/500/280"
    },
    {
        "id": 19,
        "title": "200 * 300",
        "imageUrl": "https://picsum.photos/200/300"
    },
    {
        "id": 20,
        "title": "300 * 250",
        "imageUrl": "https://random.imagecdn.app/300/250"
    },
    {
        "id": 21,
        "title": "300 * 150",
        "imageUrl": "https://random.imagecdn.app/300/150"
    },
    {
        "id": 22,
        "title": "200x300",
        "imageUrl": "https://source.unsplash.com/random/200x300?sig=1"
    },
    {
        "id": 23,
        "title": "300x200",
        "imageUrl": "https://source.unsplash.com/random/300x200?sig=2"
    },
    {
        "id": 24,
        "title": "400x400",
        "imageUrl": "https://source.unsplash.com/random/400x400?sig=3"
    },
    {
        "id": 25,
        "title": "Post 1",
        "imageUrl": "https://loremflickr.com/320/240"
    },
    {
        "id": 26,
        "title": "Paris",
        "imageUrl": "https://loremflickr.com/g/320/240/paris"
    },
    {
        "id": 27,
        "title": "Brazil",
        "imageUrl": "https://loremflickr.com/320/240/brazil"
    },
    {
        "id": 28,
        "title": "Girl",
        "imageUrl": "https://loremflickr.com/320/240/girl"
    },
    {
        "id": 29,
        "title": "Boy",
        "imageUrl": "https://loremflickr.com/320/240/boy"
    },
    {
        "id": 30,
        "title": "random 1",
        "imageUrl": "https://loremflickr.com/320/240?random=1"
    },
    {
        "id": 31,
        "title": "random 2",
        "imageUrl": "https://loremflickr.com/320/240?random=2"
    },
    {
        "id": 32,
        "title": "random 3",
        "imageUrl": "https://loremflickr.com/320/240?random=3"
    },
    {
        "id": 33,
        "title": "Cat 1",
        "imageUrl": "https://loremflickr.com/g/320/240/cat"
    },
    {
        "id": 34,
        "title": "House",
        "imageUrl": "https://loremflickr.com/g/320/240/house"
    },
    {
        "id": 35,
        "title": "Animal",
        "imageUrl": "https://loremflickr.com/g/320/240/animal"
    },
    {
        "id": 36,
        "title": "Car",
        "imageUrl": "https://loremflickr.com/g/320/240/car"
    },
    {
        "id": 37,
        "title": "Place Dog",
        "imageUrl": "https://placedog.net/500/280"
    },
    {
        "id": 38,
        "title": "400 * 300",
        "imageUrl": "https://picsum.photos/400/300"
    }
]
app.use(cors({
  origin: 'http://localhost:4200',
  exposedHeaders: ['Content-Length'],
}));

app.get('/posts', (req, res) => {
    /**
     * use max to avoid negative number's
     */
  const page  =  Math.max(1, parseInt(req.query.page)) ; 
  const perPage = Math.max(1 , parseInt(req.query.perPage)) ; 
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Simulate a 3-second delay before sending the response
  setTimeout(() => {
    // Get the paginated subset of posts
    const paginatedPosts = posts.slice(startIndex, endIndex);

    res.json({
      currentPage: page,
      posts: paginatedPosts,
    });
  }, 3000); // 3000 milliseconds (3 seconds)
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



