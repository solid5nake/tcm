# React Starter

## Installation

```bash
npm install
npm start
open http://localhost:3000
```


## Assignments

- [x] Remove the button to add more players
- [x] Add a check to see if we're not adding more than 3 players
- [x] Also make sure that we don't show the form to add another player if we reached the player limit of 3
- [x] Create an action + reducer to update a player (name and/or color) by their index
  - [x] Create an action that emits `UPDATE_PLAYER`, with the new player object as a payload
  - [x] Create a case statement in the players reducer to process the `UPDATE_PLAYER` action **Make sure to not change the immutable state object directly!**
  - [x] Return the new state from the reducer
- [ ] Create an action createGame, that emits a `CREATE_GAME` and no payload
  - [ ] Create a new file in the reducers folder, called `cards` to manage the top level `cards` collection inside your store
  - [ ] Make sure to export the new reducer from `reducers/index.js` so that it will be added to the store
  - [ ] Then write a reducer that acts on the `case` where we emit `CREATE_GAME`, and return a new set of 16 cards
  - [ ] Hook up the button in `WhoIsPlaying` to call a way to create a game from the parent `App` component
  - [ ] Add a check to see if we don't try to start a game with less than 2 players

------------------

Simplified version of [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) for the
traineeship program.
