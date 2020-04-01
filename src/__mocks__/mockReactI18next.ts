let selectedLanguage = 'en';
const useMock = {
	t: (k: string) => k,
	i18n: {
		language: selectedLanguage,
		changeLanguage: (lang: string) => (selectedLanguage = lang)
	}
};

const reactI18next = jest.mock('react-i18next', () => ({
	withTranslation: jest.fn().mockImplementation(() => (Component: React.FC | React.ComponentClass) => {
		const ComponentCopy = { ...Component };
		ComponentCopy.defaultProps = {
			...Component.defaultProps,
			t: (k: string) => k
		};
		return ComponentCopy;
	}),
	useTranslation: () => useMock
}));

export default reactI18next;
