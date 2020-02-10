import webextOptionsSync from 'webext-options-sync';

export enum DefaultBehaviour {
	disableAutocomplete = 'disableAutocomplete',
	doNothing = 'doNothing',
	forceEnableAutocomplete = 'forceEnableAutocomplete',
}

// tslint:disable-next-line: interface-over-type-literal
export type UserSettings = {
	defaultBehaviour: DefaultBehaviour;
};

const defaults: UserSettings = {
	defaultBehaviour: DefaultBehaviour.disableAutocomplete,
};

export default new webextOptionsSync({
	defaults,
	logging: true,
	migrations: [webextOptionsSync.migrations.removeUnused],
});
