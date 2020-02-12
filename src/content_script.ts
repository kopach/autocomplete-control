import optionsStorage, {
	DefaultBehaviour,
	UserSettings,
} from './options-storage';

populateAutocompleteSetup();

async function populateAutocompleteSetup(): Promise<void> {
	const { defaultBehaviour }: UserSettings = await optionsStorage.getAll();

	switch (defaultBehaviour) {
		case DefaultBehaviour.disableAutocomplete:
			disableAutocomplete();
			break;
		case DefaultBehaviour.forceEnableAutocomplete:
			forceEnableAutocomplete();
			break;
		case DefaultBehaviour.doNothing:
		default:
			break;
	}
}

function disableAutocomplete(): void {
	setFormAutocomplete('off');
}

function forceEnableAutocomplete(): void {
	setFormAutocomplete('on');
}

function setFormAutocomplete(autocompleteValue: string): void {
	const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');

	for (const form of Array.prototype.slice.call(forms)) {
		setElementAutocomplete(form, autocompleteValue);
		const formElements: HTMLFormControlsCollection = form.elements;

		for (const element of Array.prototype.slice.call(formElements)) {
			setElementAutocomplete(element, autocompleteValue);
		}
	}
}

function setElementAutocomplete(
	element: Element,
	autocompleteValue: string
): void {
	element.setAttribute('autocomplete', autocompleteValue);
}
