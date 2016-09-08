import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import createGame from './actions/create-game'

// Components
import WhoIsPlaying from './containers/WhoIsPlaying'
import Game from './containers/Game'

// Material UI Components
import mui from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material UI Colors
import {
  red700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red700,
    accent1Color: grey400,
  }
});

class App extends Component {
  newGame() {
    this.props.createGame()
  }

  renderGame() {
    const { gameStarted, cards, players } = this.props
    if (!gameStarted) return <WhoIsPlaying startPlaying={ this.newGame.bind(this) } />
    return (
      <div>
        <Game cards={ cards } />
      </div>
    )
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1>Memory</h1>
          { this.renderGame() }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    gameStarted: (state.cards.length > 0),
  }
}

App.propTypes = {
  createGame: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, { createGame })(App)
