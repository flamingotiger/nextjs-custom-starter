import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';

const sizes: { [key: string]: number } = {
	mobile: 320,
	tablet: 768,
	desktop: 1024
};

// Iterate through the sizes and create a media template
type BackQuoteArgs = string[];

interface Media {
	mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
	tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
	desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
	mobile: () => undefined,
	tablet: () => undefined,
	desktop: () => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
	const accCopy = { ...acc };
	switch (label) {
		case 'desktop':
			accCopy.desktop = (...args: BackQuoteArgs): CSSProp =>
				css`
					@media only screen and (min-width: ${sizes.desktop}px) {
						${args}
					}
				`;
			break;
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

const colors = {
	white: '#ffffff',
	black: '#000000'
};

const secondaryColors = {};
const fontSizes: string[] = [];

const theme = {
	colors,
	fontSizes,
	secondaryColors,
	media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
