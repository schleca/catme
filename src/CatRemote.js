import React from 'react';
import {CatRemoteContainer, CatRemoteImage} from './styles.js';
import remote from './images/remote.png';
import remoteHover from './images/remote-hover.png';

class CatRemote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isRemoteHover: false,
    };
  }

  render() {
  	return (
    	<CatRemoteContainer>
				<CatRemoteImage 
					onMouseEnter={() => this.setState({ isRemoteHover: true }) }
   				onMouseLeave={() => this.setState({ isRemoteHover: false }) }
   				onClick={() => this.props.reload() }
					src={this.state.isRemoteHover ? remoteHover : remote} 
					alt="remote control" 
				/>
    	</CatRemoteContainer>
		);
  }
}

export default CatRemote;