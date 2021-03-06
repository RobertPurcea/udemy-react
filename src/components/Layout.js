import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Wrapper from '../hoc/Wrapper';

injectGlobal`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Open Sans', sans-serif;
	}
`;

const Main = styled.main`
	margin-top: 16px;
`;

const Layout = (props) => {
	return (
		<Wrapper>
			<div>Toolbar, backdrop, sidedrawer</div>
			<Main>{props.children}</Main>
		</Wrapper>
	);
}

export default Layout;