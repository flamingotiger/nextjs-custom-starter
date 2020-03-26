/* global jest */
import React from 'react';
import * as reactI18next from 'react-i18next';

const hasChildren = (node: any) => node && (node.children || (node.props && node.props.children));

const getChildren = (node: any) => (node && node.children ? node.children : node.props && node.props.children);

const renderNodes = (reactNodes: any) => {
	if (typeof reactNodes === 'string') {
		return reactNodes;
	}

	return Object.keys(reactNodes).map((key, i) => {
		const child = reactNodes[key];
		const isElement = React.isValidElement(child);

		if (typeof child === 'string') {
			return child;
		}
		if (hasChildren(child)) {
			const inner: any = renderNodes(getChildren(child));
			return React.cloneElement(child, { ...child.props, key: i }, inner);
		}
		if (typeof child === 'object' && !isElement) {
			return Object.keys(child).reduce((str, childKey) => `${str}${child[childKey]}`, '');
		}

		return child;
	});
};

const useMock: any = [(k: string) => k, {}];
useMock.t = (k: string) => k;
useMock.i18n = {};

const { I18nextProvider } = reactI18next;
const { initReactI18next } = reactI18next;
const { setDefaults } = reactI18next;
const { getDefaults } = reactI18next;
const { setI18n } = reactI18next;
const { getI18n } = reactI18next;

module.exports = {
	// this mock makes sure any components using the translate HoC receive the t function as a prop
	withTranslation: jest.fn().mockImplementation(() => (Component: React.FC | React.ComponentClass) => {
		const ComponentCopy = { ...Component };
		ComponentCopy.defaultProps = { ...Component.defaultProps, t: () => '' };
		return ComponentCopy;
	}),
	Trans: ({ children }: { children: React.ReactNode }) => renderNodes(children),
	Translation: ({ children }: any) => children((k: string) => k, { i18n: {} }),
	useTranslation: () => useMock,

	// mock if needed
	I18nextProvider,
	initReactI18next,
	setDefaults,
	getDefaults,
	setI18n,
	getI18n
};
