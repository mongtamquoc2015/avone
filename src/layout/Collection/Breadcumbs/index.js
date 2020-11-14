import React from 'react'
import { Container, Link, Navbar, Symbol, Title } from './BreadcumbsStyles'

const BreadcumbsUI = ({ title }) => {
	return (
		<Container>
			<Navbar>
				<Link to="/">Home</Link>
				<Symbol>|</Symbol>
				<Title>{title}</Title>
			</Navbar>
		</Container>
	)
}

export default BreadcumbsUI;