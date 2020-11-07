import React, { useState } from 'react';
import {
	Button, ButtonWrap, Container,
	Frame, Icon, SlickArrow,
	SubTitle, TextContent, Title,
	WrapCaption
} from './SliderStyles';

const SliderUI = ({ sliders }) => {
	const [index, setIndex] = useState(0);

	const slideRight = () => {
		setIndex((index + 1) % sliders.length);
	}

	const slideLeft = () => {
		const nextIndex = index - 1;
		if (nextIndex < 0) {
			setIndex(sliders.length - 1);
		} else {
			setIndex(nextIndex);
		}
	};
	return (
		<Container>
			<Frame src={sliders[index].src}>
				<SlickArrow onClick={slideRight} position="right">
					<Icon className="fas fa-chevron-right"></Icon>
				</SlickArrow>
				<SlickArrow onClick={slideLeft} position="left">
					<Icon className="fas fa-chevron-left"></Icon>
				</SlickArrow>
				<TextContent position={sliders[index].position}>
					<WrapCaption>
						<Title>
							<b>{sliders[index].title}</b>
						</Title>
						<SubTitle>{sliders[index].subTitle}</SubTitle>
						<ButtonWrap>
							<Button>Shop now</Button>
						</ButtonWrap>
					</WrapCaption>
				</TextContent>
			</Frame>
		</Container>
	)
}

export default SliderUI;
