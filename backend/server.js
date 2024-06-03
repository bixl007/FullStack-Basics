import express from 'express';

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

app.get('/api/jokes', (req, res)=> {
    const jokes = [
        {
          "id": 1,
          "title": "Atoms Joke",
          "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          "id": 2,
          "title": "Scarecrow Award",
          "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          "id": 3,
          "title": "Skeletons Fight",
          "content": "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
          "id": 4,
          "title": "Fake Spag3000hetti",
          "content": "What do you call fake spaghetti? An impasta!"
        },
        {
          "id": 5,
          "title": "Sad Math Book",
          "content": "Why was the math book sad? Because it had too many problems."
        },
        {
          "id": 6,
          "title": "Snowman Vampire",
          "content": "What do you get if you cross a snowman and a vampire? Frostbite."
        },
        {
          "id": 7,
          "title": "Couples Gym",
          "content": "Why dont some couples go to the gym? Because some relationships dont work out."
        },
        {
          "id": 8,
          "title": "Nacho Cheese",
          "content": "What do you call cheese that isn't yours? Nacho cheese."
        },
        {
          "id": 9,
          "title": "Penguin House",
          "content": "How does a penguin build its house? Igloos it together."
        },
        {
          "id": 10,
          "title": "Gummy Bear",
          "content": "What do you call a bear with no teeth? A gummy bear!"
        }
      ]

      res.send(jokes);
        
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});