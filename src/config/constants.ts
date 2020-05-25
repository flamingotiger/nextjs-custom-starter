export const setCookie = (cookieName: string, cookieValue: string, date: number) => {
	const d = new Date();
	d.setTime(d.getTime() + date * 24 * 60 * 60 * 1000);
	const expires = `expires=${d.toUTCString()}`;
	document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
};

export const getCookie = (cookieName: string) => {
	const name = `${cookieName}=`;
	const cookieSplit = document.cookie.split(';');
	for (let i = 0; i < cookieSplit.length; i++) {
		let cookie = cookieSplit[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return '';
};
