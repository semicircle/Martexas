'use strict';

import _ from 'lodash';
import React from 'react';
import { Row, Panel, Table, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { FaIcon } from 'react-fa-icon';

class PlayerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someState : 0
    };
  }

  render() {
    return(
      <Row>
        <Panel>
          <Table striped condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Seat</th>
                <th>
                  <ButtonToolbar>
                    <ButtonGroup bsSize='xsmall'>
                      <Button><FaIcon icon='user-plus'/></Button>
                      <Button><FaIcon icon='user-times'/></Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </th>
              </tr>
            </thead>
          </Table>
        </Panel>
      </Row>
    )
  }
}

PlayerTable.defaultProps = {
  playerCount: 5,
  players: [],
  error: null
}

export default PlayerTable;
