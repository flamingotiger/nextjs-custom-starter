import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';
import { IndexKey } from 'src/config/default';
import { color, layout } from './variable';

const sizes: IndexKey<number> = {
	desktop: 1079,
	tablet: 767,
	phone: 580
};

type BackQuoteArgs = string[];

interface Media {
	desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
	tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
	phone: (...args: BackQuoteArgs) => CSSProp | undefined;
}

// Iterate through the sizes and create a media template
const media: Media = {
	desktop: () => undefined,
	phone: () => undefined,
	tablet: () => undefined
};

Object.keys(sizes).reduce((acc: IndexKey<any>, label: string) => {
	switch (label) {
		case 'desktop':
			acc.desktop = (...args: BackQuoteArgs): CSSProp =>
				css`
					@media only screen and (min-width: ${sizes.desktop + 1}px) {
						${args}
					}
				`;
			break;
		case 'tablet':
			acc.tablet = (...args: BackQuoteArgs): CSSProp =>
				css`
					@media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet + 1}px) {
						${args}
					}
				`;
			break;
		case 'phone':
			acc.phone = (...args: BackQuoteArgs): CSSProp =>
				css`
					@media only screen and (max-width: ${sizes.tablet}px) {
						${args}
					}
				`;
			break;
		default:
			break;
	}
	return acc;
}, media);

const theme = {
	color,
	layout,
	media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
