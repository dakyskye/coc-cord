import { Client, Presence } from "discord-rpc";
import { workspace } from "coc.nvim";

const clientID: string = "731545228539985940";
const client: Client = new Client({ transport: "ipc" });

type language = {
	name: string;
	fileName?: string;
	extension: string;
	extensionAliases?: Array<string>;
	assetName: string;
};

let languages: Array<language> = [];

languages.push({ name: "C language", extension: "c", assetName: "c" });
languages.push({ name: "CMake", fileName: "CMake", extension: "txt", assetName: "cmake" });
languages.push({ name: "C++", extension: "cpp", extensionAliases: ["cc"], assetName: "cpp" });
languages.push({ name: "CSS", extension: "css", assetName: "css" });
languages.push({ name: "Docker", fileName: "Dockerfile", extension: "", assetName: "docker" });
languages.push({ name: "Docker", fileName: "docker-compose", extension: "yml", assetName: "docker" });
languages.push({ name: "Docker", fileName: ".dockerignore", extension: "", assetName: "docker" });
languages.push({ name: "Git", fileName: ".gitignore", extension: "", assetName: "git" });
languages.push({ name: "Golang", fileName: "go", extension: "mod", assetName: "golang" });
languages.push({ name: "Golang", fileName: "go", extension: "sum", assetName: "golang" });
languages.push({ name: "Golang", extension: "go", assetName: "golang" });
languages.push({ name: "Golang", fileName: "go", extension: "mod", assetName: "golang" });
languages.push({ name: "C language", extension: "h", assetName: "h" });
languages.push({ name: "C++", extension: "hpp", assetName: "hpp" });
languages.push({ name: "HTML", extension: "html", assetName: "html" });
languages.push({ name: "JavaScript", extension: "js", assetName: "javascript" });
languages.push({ name: "JavaScript React", extension: "jsx", assetName: "javascriptx" });
languages.push({ name: "JSON", extension: "json", assetName: "json" });
languages.push({ name: "GNU Make", fileName: "makefile", extension: "", assetName: "makefile" });
languages.push({ name: "GNU Make", fileName: "Makefile", extension: "", assetName: "makefile" });
languages.push({ name: "Markdown", extension: "md", extensionAliases: ["MD"], assetName: "markdown" });
languages.push({ name: "PowerShell", extension: "ps1", assetName: "powershell" });
languages.push({ name: "Prettier", fileName: ".prettierrc", extension: "", assetName: "prettier" });
languages.push({
	name: "Prettier",
	fileName: ".prettierrc",
	extension: "json",
	extensionAliases: ["yml", "yaml", "toml", "js", "config.js"],
	assetName: "prettier"
});
languages.push({ name: "Python", extension: "py", assetName: "python" });
languages.push({ name: "Ruby", extension: "rb", assetName: "ruby" });
languages.push({ name: "Rust", extension: "rs", assetName: "rust" });
languages.push({ name: "SASS", extension: "sass", assetName: "sass" });
languages.push({ name: "SCSS", extension: "scss", assetName: "scss" });
languages.push({ name: "Shell", extension: "sh", extensionAliases: ["bash", "zsh", "fish", "ksh"], assetName: "shell" });
languages.push({ name: "SQL", extension: "sql", assetName: "sql" });
languages.push({ name: "TypeScript", extension: "ts", assetName: "typescript" });
languages.push({ name: "TypeScript Declaration", extension: "d.ts", assetName: "typescript_d" });
languages.push({ name: "TypeScript React", extension: "tsx", assetName: "typescriptx" });
languages.push({ name: "Vim", extension: "vim", assetName: "vim" });
languages.push({ name: "Vue", extension: "vue", assetName: "vue" });
languages.push({ name: "YAML", extension: "yaml", extensionAliases: ["yml"], assetName: "yaml" });

export const activate = () => {
	client.connect(clientID);
	client.login({ clientId: clientID });

	const startTimeStamp = new Date();

	client.on("ready", () => {
		setInterval(() => {
			client.setActivity(getPresence(startTimeStamp));
		}, 1000);
	});
};

const getPresence = (startTimeStamp: number | Date): Presence => {
	let presence: Presence = {
		startTimestamp: startTimeStamp,
		smallImageKey: "nvim",
		smallImageText: "NeoVim text editor"
	};

	let idlingPresence: Presence = { largeImageKey: "nvim", largeImageText: "NeoVim text editor", state: undefined, details: "idling" };

	presence = { ...presence, ...idlingPresence };

	let doc = workspace.getDocument(workspace.uri);
	if (!doc) {
		return presence;
	}

	let fileName = doc.uri.split("/").pop();

	if (!fileName) {
		return presence;
	}

	let ext = fileName.split(".");

	presence.state = `Workspace: ${workspace.root.split("/").pop()}`;
	presence.details = `Editing ${fileName}`;

	if (ext.length > 1) {
		ext = ext.slice(1, ext.length);
		if (fileName[0] == ".") {
			ext[0] = "." + ext[0];
		}
	}

	const lang = languages.find((l) => {
		if (l.fileName) {
			let fName: string = l.extension === "" ? l.fileName : l.fileName + "." + l.extension;
			if (fileName == fName || l.extensionAliases?.find((aExt) => l.fileName + "." + aExt == fileName)) {
				return l;
			}
		} else {
			if (l.extension == ext[0] || l.extension == ext.join(".") || l.extensionAliases?.find((aExt) => aExt == ext[0])) {
				return l;
			}
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

export const deactivate = () => {
	client.destroy();
};

process.on("unhandledRejection", (err) => workspace.createOutputChannel("Discord").appendLine(err as string));
