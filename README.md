***Commentary*** 
Remember when we met a long time ago in Jumpstart, treasure hunt!!!

You can showcase your skillsets with React.

As always we want to setup our environment then the README. Today we will do mob programming and you get to have you own individual project. We will start together then you will get an opportunity to work on your own. Of course, we collab and support each other.

1. EveryBody click the link in slack. Your personal treasure hunt repo will get auto-populated. Click the next link to go to your repo. Let's checkout the README without all the markup.

Lots of user stories. Lots of opportunities to practice. Let's agree to focus on one thing at a time. I suggest creating a branch for each user story to help you with your pace. We will start together. Stop me if you have a question or you are not getting a similar output.

2. clone your repo locally.

3. create a branch `board` for first story

4. start server (remind them to stop server before closing the terminal)
 -  $ yarn start

5. - see error, oh, this is an existing project. I need to run $ yarn to bring in the required dependencies.

6. create an additional tab for other commands

 - only see heading tag, inspect page - no errors

 7. - go to first user story
***Commentary*** 

# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
branch: board

Allow everybody to talk about building a box, then show what is there.
At first glance, I just want to get to coding. searching how to create a grid. But let's truly look around for what is provided. react state and Square
9 ?s
square
cool I see a square..but we need 9 of those in a 3X3 grid
Let's I have an array that has 9 questions.
If I iterate across the values of the array and tell it to display the box the same amount of times. Hof .map will give me the same length.
ok.
9 squares
but we need the ?s inside. to see the value in each square we need to tell square to display it. `props`, just do value
```js

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      {board.map((value, index) => {
        return <Square key={index} value={value} />
      })}
    </>
  )


import React from "react"

const Square = ({value}) => {
  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
```
of 9 squares with ?s
now let's fix that grid

```cs
.square {
  height: 200px;
  width: 200px;
  border: 2px solid black;
  // add styling for text
  text-align: center;
  font-size: 175px;
}

.grid {
  // flexbox froggy - flex stretches across the whole container, wrap if necessary if exceeds the specified width, margin top, right, bottom, left to center
  display: flex;
  flex-wrap: wrap;
  width: 620px;
  margin: 0 auto;
}
```
git flow ---> "created grid with question mark"

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
branch: index

show with table
console.table(board)

The StrictMode component is used to identify bugs during development. on index.js so console will print twice.

each values lives at an index on the array, if we share that to the Square, it can then send the index back when the square is clicked. --> onClick attribute on each square --> need a function to give alert() to show id.
- input: index of the selected box (number)
- output/return: alert message showing index (number)
- function name: showIndex
```js
const showIndex = (selectedId) => {
  return alert(selectedId)
}
```
to get the index, we need to use functional props to receive, which means the function call will be performed where the data is located.
- send index and function as props
- onClick to trigger function call
- perform function call on Square

- Because React will automatically render this page due to the component call. This function will be immediately called and as the map iteration occurs to create the box, So the index is given not waiting on a click =>  `onClick={showIndex(index)}`

- to prevent, we will use the anonymous function syntax to allow the page to wait for the click or onClick accepts a callback function that will be called when the button is clicked.

- if that is hard to read, then we can also create a custom function to trigger the function
```js
const handleClick = (index) => {
  showIndex(index)
}
```

git flow --->"index in an alert message"

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
branch: tree
where are the question marks stored --> changing state, setter function. tell it to return the values of the array but changed the value of the index that is clicked
we see the selectedId so let's use it
```js
board[selectedId] = "🌴"
setBoard([...board])
```

git flow--->"shows tree emoji when clicked"


- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.

random num for winning and losing, use conditonal statements, first true then 
treasure emoji ---> "☀️"
bomb emoji ---> "⛈" 

```js
  const showIndex = (selectedId) => {
    let treasureLocation = Math.ceil(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)
    console.log(treasureLocation, bombLocation)
    if(treasureLocation === selectedId) {
      board[selectedId] = "☀️"
      setBoard([...board])
    } else if(bombLocation === selectedId) {
      board[selectedId] = "⛈"
      setBoard([...board])
    } else {
      board[selectedId] = "🌴"
      setBoard([...board])
    }
  }
```


- As a user, I can click on a “Play Again” button that will restart the game.
- button ---> Play again, trigger the function
- function to create box with ?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

```js
// Array literal notation
// Arrays can be created using the literal notation:
  setBoard(["?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"])


// Array constructor with a single parameter
// Arrays can be created using a constructor with a single number parameter. An array is created with its length property set to that number, and the array elements are empty slots. .fill() states what to place in the slots
    setBoard(Array(9).fill("?"))
```

git flow ---> "restarted game"


Refactored to show container
```js
import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import NewGame from "./components/NewGame"

const App = () => {

  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const showIndex = (selectedId) => {
    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)
    console.log(treasureLocation, bombLocation)
    if(treasureLocation === selectedId) {
      board[selectedId] = "☀️"
      setBoard([...board])
    } else if(bombLocation === selectedId) {
      board[selectedId] = "⛈"
      setBoard([...board])
    } else {
      board[selectedId] = "🌴"
      setBoard([...board])
    }
  }

  const reStart = () => {
    // setBoard(["?",
    // "?",
    // "?",
    // "?",
    // "?",
    // "?",
    // "?",
    // "?",
    // "?"])
    setBoard(Array(9).fill("?"))
  }
  
  console.table(board)
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square 
        board={board}
        showIndex={showIndex} 
      />
      <NewGame reStart={reStart}/>
      
    </>
  )
}

export default App

```


presentation
```js
import React from "react";

const NewGame = ({reStart}) => {
  return(
    <button onClick={reStart}>Play Again</button>
  )
}

export default NewGame

import React from "react"

const Square = ({board, showIndex}) => {
// console.log(board)
  // will need index passed from App.js
  // const handleClick = () => {
  //   showIndex(index)
  // }

  return (
    <main className="grid">
      {board.map((value, index) => {
        return(
          <div 
            key={index} 
            className="square"
            onClick={()=>{showIndex(index)}}
            // onClick={handleClick}
          >
            {value}
          </div>
        )
      })}
    </main>
  )
}
export default Square

```
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
- use function that controls emojis, set variable to start at 5 then on else subtract 1
- since the value needs to be track and it is change ---> state
- show value just being assigned to a variable and console.log, keeps being reset with each render, 
- reset to 5 on newgame
  // console.log(counter)

  ```js
  <!-- app.js -->
  } else {
      board[selectedId] = "🌴"
      setCounter(counter - 1)
      setBoard([...board])
    }

    <NewGame 
        reStart={reStart}
        counter={counter}
      />
      <!-- newgame.js -->
      const NewGame = ({reStart, counter}) => {
  return(
    <>
      <p>Plays Left: {counter}</p>
      <button onClick={reStart}>Play Again</button>
    </>
  ```

- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- perform action on the emoji function
`alert("🏝 You won. ☀️ Enjoy your beach day 🥥")`


- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
`alert("Sorry, your beach umbrella 🌂 is being used for rain ☔️.")`

- As a user, I cannot continue to play the game after I win or lose.
create a variable to track if things have changes, true, switch to false
reset on newgame


- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
update emoji function

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
