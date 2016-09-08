import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import addPlayer from '../actions/add-player'
import updatePlayer from '../actions/update-player'
import NewPlayer from '../components/NewPlayer'

const MAX_PLAYERS = 3

class WhoIsPlaying extends Component {
  renderPlayer(player, index) {
    const { name, color } = player

    return <NewPlayer
      key={index}
      index={index}
      onChange={ this.updatePlayer.bind(this) }
      { ...player } />
  }

  maxPlayersReached() {
    return (this.props.players.length === MAX_PLAYERS)
  }

  createPlayer(player) {
    if (this.maxPlayersReached()) return
    this.props.addPlayer(player)
  }

  updatePlayer(player, index) {
    const storeExistingPlayer = this.props.updatePlayer
    if (this.props.players[index]) return storeExistingPlayer(player, index)
    this.createPlayer(player)
  }

  renderEmptyPlayer() {
    const { players } = this.props
    if (this.maxPlayersReached()) return

    return this.renderPlayer({}, players.length)
  }

  startGame() {
    const { players, startPlaying } = this.props
    if (players.length > 1) startPlaying()
  }

  render() {
    const { players } = this.props

    return (
      <div>
        <h2>Who's Playing?</h2>
        { players.map(this.renderPlayer.bind(this)) }
        { this.renderEmptyPlayer() }
        <div>
          <button onClick={ this.startGame.bind(this) } disabled={ players.length < 2 }>Start Playing</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
  }
}

WhoIsPlaying.propTypes = {
  players: PropTypes.array.isRequired,
  addPlayer: PropTypes.func.isRequired,
  updatePlayer: PropTypes.func.isRequired,
  startPlaying: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { addPlayer, updatePlayer })(WhoIsPlaying)
