import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';
import { fontSizes, colors } from './variable';

const sizes: { [key: string]: number } = {
	mobile: 768,
	tablet: 1080
};

// Iterate through the sizes and create a media template
type BackQuoteArgs = string[];

interface Media {
	mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
	tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
	mobile: () => undefined,
	tablet: () => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
	const accCopy = { ...acc };
	switch (label) {
		case 'tablet':
			accCopy.tablet = (...args: BackQuoteArgs): CSSProp =>
				css`
					@media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
						${args}
					}
				`;
			break;
		case 'mobile':
			accCopy.mobile = (...args: BackQuoteArgs): CSSProp =>
				css`
					@media only screen and (max-width: ${sizes.tablet}px) {
						${args}
					}
				`;
			break;
		default:
			break;
	}
	return accCopy;
}, media);

const theme = {
	colors,
	fontSizes,
	media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
