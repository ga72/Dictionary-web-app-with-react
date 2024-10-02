import React from 'react';

import Pronounce from '../Pronounce/Pronounce';
import PartsOfSpeech from '../PartsOfSpeech/PartOfSpeech';
import Footer from '../Footer/Footer';
import Searching from '../Searching/Search';
import NotFound from '../NotFound/NotFound';

import { groupedMeanings } from '../../utils/groupMeanings';
const Index = ({ searching, idle, notFound, content }) => {
	if (idle) {
		return <main className='main'></main>;
	}
	if (notFound) {
		return (
			<main className='main'>
				<NotFound />
			</main>
		);
	}
	if (searching) {
		return (
			<main className='main'>
				<Searching />
	
			</main>
		);
	} else if (!searching && content) {
		return (
			<main className='main'>
				<Pronounce
					phonetics={content.phonetics}
					word={content.word}
					phonetic={content.phonetic}
				/>
				<PartsOfSpeech meanings={groupedMeanings(content.meanings)} />
				<Footer />
			</main>
		);
	} else {
		return <main className='main'></main>;
	}
};

export default Index;
