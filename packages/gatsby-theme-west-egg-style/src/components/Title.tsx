import * as React from 'react';
import { colors } from '../utils/colors';
import { css } from '@emotion/core';

interface TitleProps {
	fontSize?: string;
	fontWeight?: string;
	children: React.ReactNode;
}

/**
 * A configurable title
 * @param fontSize Optional font size - defaults to 3rem
 * @param fontWeight Optional font weight (300,400,400i,700) - defaults to 300
 * @param children The contents of the title
 */
export default ({ fontSize, fontWeight, children }: TitleProps) => (
	<div
		css={css`
			font-family: Montserrat;
			font-weight: ${fontWeight ? fontWeight : '300'};
			line-height: 110%;
			font-size: ${fontSize ? fontSize : '3rem'};
			letter-spacing: 2px;
			margin: 0 0 12px 0;
			padding: 0;
			color: ${colors.primary};
			display: flex;
			align-items: center;
			justify-content: center;
			word-wrap: break-word;
		`}
	>
		{children}
	</div>
);
