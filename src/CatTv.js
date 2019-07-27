import React from 'react';
import {CatTvContainer, CatTvImage} from './styles.js';
import tv from './images/tv.png';


function CatTv(props) {
  return (
    <CatTvContainer style={
    	{ backgroundImage: "url('http://thecatapi.com/api/images/get?format=src&type=gif&nbClicks=" + props.nbClicks + "')" }
    }>
    	<CatTvImage src={tv} alt="tv frame"/>
    </CatTvContainer>
	)
}

export default CatTv;