# Meme Creator Application

Meme Creator is a responsive web application dedicated for people who love creating funny memes to make other people laugh. It interacts with a third party API to get memes data. It is developed using React.js library.

## Screenshot

![meme-creator-screenshot](https://user-images.githubusercontent.com/78702422/199364111-14e7daa9-7b4f-40c3-b2a5-db038ebbb15e.png)

## Features

- Generate random meme images
- Upload a meme image from local machine
- Add top and bottom text to the meme image
- Change text size
- Change text position (X/Y)
- Download created memes

## Lessons Learned

- Handling events using event listeners
- Updating the state of data using React "useState" hook
- Using conditional rendering (&& operator / ternary operator)
- Using dynamic styles
- Working with forms (controlled inputs)
- Handling side effects when fetching memes data from API using React "useEffect" hook
- Taking a capture of a DOM element using html2canvas
- Using SVG icons with React

## API Link

https://api.imgflip.com/get_memes

## Run Project Locally

Clone the project

```bash
  git clone https://github.com/ChaymaeBenayad/Meme-Creator
```

Go to the project directory

```bash
  cd Meme-Creator
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Demo

https://meme-creator-chaymae.netlify.app/
