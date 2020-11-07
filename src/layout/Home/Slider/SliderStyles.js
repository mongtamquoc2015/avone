import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 700px;
	position: relative;
`;

export const SlickArrow = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	border-radius: 5px;

	height: 40px;
	line-height: 38px;
	position: absolute;
	top: 50%;
	z-index: 9;

	height: 35px;
	line-height: 34px;
	width: 35px;
	text-align: center;
	font-size: 0px;

	color: #000;
	padding: 0;
	border: none;
	border-radius: 5px;
	outline: 0 none;

	cursor: pointer;
	${({ position }) => position === 'left' ? 'left: 10px' : 'right: 10px'};
	opacity: 0;

	&:hover {
		opacity: 0.7;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
		border-radius: 5px;
		background-color: rgba(255,255,255,0.5);
	}
`;

export const Frame = styled.div`
	width: 100%;
	height: 100%;
	background: url(${({ src }) => src});
	background-size: cover;
	background-position: center;
	
	position: absolute;
	display: flex;
	flex-direction: column;
	transition: all 500ms ease-out;

	&:hover ${SlickArrow}{
		opacity: 0.5;
	}
`;

export const TextContent = styled.div`
	width: 600px;
	height: 267px;
	${({ position }) => position === 'right' ? 'right: 7%' : 'left: 7%'};
	position: absolute;
	max-width: 600px;

	width: 50%;
	top: 50%;
	transform: translateY(-50%);

	animation-name: ${({ position }) => position === 'right' ? 'toRight' : 'toBottom'};
	animation-duration: 0.45s;

	@keyframes toBottom {
		0% {
			transform: translateY(-500px);
		}
		50%{
			transform: translateY(-30%);	
		}
		100%{
			transform: translateY(-40%);	
		}
	}
	@keyframes toRight {
		0% {
			transform: translateX(-500px);
		}
		100%{
			transform: translateX(0px);	
		}
	}
`;

export const WrapCaption = styled.div`
	width: 100%;
	height: 100%;
	padding: 30px;
	opacity: 1;
	text-align: center;
	transition: all 0.45ms ease-out;
`;

export const Title = styled.h2`
	color: #000000;
	letter-spacing: normal;
	font-size: 50px;
	line-height: 1.1;
	margin: 5px 0 0;
	width: 540px;
	height: 110px;
	user-select: none;
`;

export const SubTitle = styled.span`
	margin-top: 10px;
	letter-spacing: normal;
	display: block;
	font-size: 16px;
	line-height: 1.1;
	user-select: none;
`;

export const ButtonWrap = styled.div`
	margin-top: 30px;
	width: 100%;
	cursor: pointer;

`;

export const Button = styled.button`
	vertical-align: middle;
	cursor: pointer;
	border: 2px solid rgba(0,0,0,0);
	padding: 7px 15px;

	background-color: #111;
	letter-spacing: 0.02em;
	color: #fff;
	font-size: 13px;
	font-weight: 400;

	text-transform: uppercase;
	line-height: 1;
	white-space: normal;
	border-radius: 0;
	transition: all 0.3s ease-in-out;

	width: 116px;
	height: 35px;
	border: 2px solid rgba(0,0,0,0);

	&:hover {
		color: #ffffff;
    background-color: #262525;
    border: 2px solid #030505;
    opacity: 1;
	}
`;

export const Icon = styled.i`
	font-size: 16px;
	color: #000;
`;
