import React from 'react';
import {CatNameImage, CatNameContainer} from './styles.js';

import catinator from './images/catinator.png';
import furnando from './images/furnando.png';
import shakespurr from './images/shakespurr.png';
import skywhisker from './images/skywhisker.png';
// import furnando from './images/furnando.png';
// import all the images

const catNamesArray = [catinator, furnando, shakespurr, skywhisker];


function CatName() {
  return (
    <CatNameContainer>
    	<CatNameImage src={catNamesArray[Math.floor(Math.random() * catNamesArray.length)]} alt="cat name" />
    </CatNameContainer>
	)
}


// names[Math.floor(Math.random() * names.length)];
export default CatName;