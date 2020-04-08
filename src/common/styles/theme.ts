import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';
import { fontSizes, colors } from './variable';
import { IndexKey } from '../../config/default';

const sizes: IndexKey<number> = {
	desktop: 1080,
	tablet: 768,
	mobile: 580
};

// Iterate through the sizes and create a media template
type BackQuoteArgs = string[];

interface Media {
	desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
	tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
	mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
	desktop: () => undefined,
	tablet: () => undefined,
	mobile: () => undefined
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
		case 'mobile':
			acc.mobile = (...args: BackQuoteArgs): CSSProp =>
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
	colors,
	fontSizes,
	media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
