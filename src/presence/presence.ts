import { Presence } from "discord-rpc";
import { language, languages } from "../language/language";

export const getPresence = (startTimeStamp: number | Date, workspace?: string, fileName?: string): Presence => {
	let presence: Presence = {
		startTimestamp: startTimeStamp,
		smallImageKey: "nvim",
		smallImageText: "NeoVim text editor"
	};

	let idlingPresence: Presence = {
		largeImageKey: presence.smallImageKey,
		largeImageText: presence.smallImageText,
		state: undefined,
		details: "idling"
	};

	presence = { ...presence, ...idlingPresence };

	if (!workspace || !fileName) {
		return presence;
	}

	presence.state = `Workspace: ${workspace}`;
	presence.details = `Editing ${fileName}`;

	let ext = fileName.split(".");

	if (ext.length > 1) {
		ext = ext.slice(1, ext.length);
		if (fileName[0] === ".") {
			ext[0] = "." + ext[0];
		}
	}

	const lang = languages.find((lang) => {
		if (lang.fileName && fileName === fileNameForLanguage(lang)) {
			return lang;
		}
		if (lang.fileName && isAliasedExtensionForFile(lang, fileName)) {
			return lang;
		}
		if (!lang.fileName && lang.extension === ext[ext.length - 1]) {
			return lang;
		}
		if (!lang.fileName && lang.extension === ext.join(".")) {
			return lang;
		}
		if (!lang?.fileName && isAliasedExtension(lang, ext[0])) {
			return lang;
		}
	});

	if (!lang) {
		return presence;
	}

	presence.largeImageKey = lang.assetName;
	presence.largeImageText = lang.name;
	presence.details = `Editing ${fileName}`;

	return presence;
};

const fileNameForLanguage = (lang: language) => (lang.extension === "" ? lang.fileName! : lang.fileName + "." + lang.extension);
const isAliasedExtensionForFile = (lang: language, fileName: string) => lang.extensionAliases?.find((ext) => lang.fileName + "." + ext === fileName);
const isAliasedExtension = (lang: language, extension: string) => lang.extensionAliases?.find((ext) => ext == extension);
