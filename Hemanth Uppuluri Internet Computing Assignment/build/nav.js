 import React from 'react';
import GNews from './newsAPI';
import styled from 'styled-components';

function Nav(){
	return(
		<div>
		<Heading> News: </Heading>
		<GNews />
		<Courtesy> Powered by Google </Courtesy>
		</div>
		);
}

const Heading = styled.p`
	font-size: 1.5em;
	font-weight: bold;
	color: palevioletred;
	padding-left: 2%;
`;

const  Courtesy = styled.p`
	font-size: xx-small;
	font-style: italic;
	color: orange;
`;
export default Nav;