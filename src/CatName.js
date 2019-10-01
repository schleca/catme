import React from 'react';
import {CatNameImage, CatNameContainer} from './styles.js';
import catinator from './images/catinator.png';
import furnando from './images/furnando.png';
import shakespurr from './images/shakespurr.png';
import skywhisker from './images/skywhisker.png';

const catNamesArray = [catinator, furnando, shakespurr, skywhisker];


function CatName() {
  return (
    <CatNameContainer>
    	<CatNameImage src={catNamesArray[Math.floor(Math.random() * catNamesArray.length)]} alt="cat name" />
    </CatNameContainer>
	)
}

export default CatName;