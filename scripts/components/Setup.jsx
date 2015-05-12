'use strict';

import React from 'react';

import PlayerTable from './setup/PlayerTable';

class SetupTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerCount: 0,
      players: [],
      validationError: null
    };

  }

  render() {
    return (
      <PlayerTable playerCount={this.state.playerCount} players={this.state.players} error={this.state.validationError} />
    );
  }
}

export default SetupTable;
