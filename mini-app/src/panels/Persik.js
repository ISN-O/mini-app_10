import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
				локации
		</PanelHeader>
		Казино, кладбище, круизный лайнер, самолёт, отель, забегаловка, ресторан,тренажёрный зал,
космическая станция, стадион, стройплощадка, тюрьма, выставка кошек, пиратский корабль
торговый центр, бассейн, кинотеатр, киностудия, церковь, ночной клуб, спа-салон,
школа, полицейский участок, подводная лодка, цирк, лунапарк, посольство, карнавал,
пляж, воинская часть, университет, больница, театр, зоопарк, пассажирский поезд,
корпоративная вечеринка, шахта, рок-концерт, библиотека, свадьба, парламент
	</Panel>	
		

		
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
