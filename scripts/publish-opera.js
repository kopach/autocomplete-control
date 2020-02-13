const uploadOperaExtension = require('upload-opera-extension');
const sync = require('globby').sync;

const options = {
	email: process.env.OPERA_EMAIL,
	password: process.env.OPERA_PASSWORD,
	extensionId: process.env.OPERA_EXT_ID,
	zipPath: sync('dist/web-ext-artifacts/*.zip')[0],
};

uploadOperaExtension(options).then(() => {
	console.log('Extension submitted for moderation 🙌');
});
