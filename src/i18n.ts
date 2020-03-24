import NextI18Next from 'next-i18next';
import { useTranslation as originalUseTranslation } from 'react-i18next';
import { NextComponentType, NextPageContext } from 'next';

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	defaultNS: 'common',
	localePath: 'public/locales',
	otherLanguages: ['ko']
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;

export const Trans = NextI18NextInstance.Trans;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
	NextPageContext,
	{ namespacesRequired: string[] },
	P & { namespacesRequired: string[] }
>;
