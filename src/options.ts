import optionsStorage from './options-storage';

optionsStorage.syncForm('#options-form').catch((e: string) => {
	const errorElement: HTMLSpanElement | null = document.querySelector('.error');
	if (errorElement) {
		errorElement.textContent = e;
	}
	throw Error(e);
});
// TODO: add loading indicator on value change
