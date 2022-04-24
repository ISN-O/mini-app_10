import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Play.css';

const Play = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
				Количество игроков
		</PanelHeader>
		<Fragment>
			<Div>
				ghbdtn
			</Div>
		</Fragment>
	</Panel>	
		

		
);

Play.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Play;
