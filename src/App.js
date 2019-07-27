import React from 'react';
import {Button, Logo, CatContainer} from './styles.js';
import CatName from './CatName.js';
import CatTv from './CatTv.js';
import CatRemote from './CatRemote.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     nbClicks: 0
    };
  }

  render() {
    return (
      <CatContainer>
        <CatName />
        <CatTv nbClicks={this.state.nbClicks} />
        <CatRemote reload={() => this.setState({ nbClicks: this.state.nbClicks + 1 }) } />
      </CatContainer>
    );
  }
}

export default App;
