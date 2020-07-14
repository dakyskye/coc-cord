export type language = {
	name: string;
	fileName?: string;
	extension: string;
	extensionAliases?: Array<string>;
	assetName: string;
};

let langs: Array<language> = [];

langs.push({
	name: "LICENSE",
	fileName: "license",
	extension: "",
	extensionAliases: ["txt", "md", "html", "asciidoc"],
	assetName: "license"
});
langs.push({
	name: "LICENSE",
	fileName: "LICENSE",
	extension: "",
	extensionAliases: ["txt", "md", "html", "asciidoc"],
	assetName: "license"
});
langs.push({
	name: "Prettier",
	fileName: ".prettierrc",
	extension: "json",
	extensionAliases: ["yml", "yaml", "toml", "js", "config.js"],
	assetName: "prettier"
});
langs.push({ name: "TypeScript config", fileName: "tsconfig", extension: "json", assetName: "tsconfig" });
langs.push({ name: "C language", extension: "c", assetName: "c" });
langs.push({ name: "CMake", fileName: "CMake", extension: "txt", assetName: "cmake" });
langs.push({ name: "Config", extension: "conf", assetName: "config" });
langs.push({ name: "C++", extension: "cpp", extensionAliases: ["cc"], assetName: "cpp" });
langs.push({ name: "C#", extension: "cs", assetName: "csharp" });
langs.push({ name: "CSS", extension: "css", assetName: "css" });
langs.push({ name: "Docker", fileName: "Dockerfile", extension: "", assetName: "docker" });
langs.push({ name: "Docker", fileName: "docker-compose", extension: "yml", assetName: "docker" });
langs.push({ name: "Docker", fileName: ".dockerignore", extension: "", assetName: "docker" });
langs.push({ name: "EditorConfig", fileName: ".editorconfig", extension: "", assetName: "editorconfig" });
langs.push({ name: "Git", fileName: ".gitignore", extension: "", assetName: "git" });
langs.push({ name: "Golang", fileName: "go", extension: "mod", assetName: "golang" });
langs.push({ name: "Golang", fileName: "go", extension: "sum", assetName: "golang" });
langs.push({ name: "Golang", extension: "go", assetName: "golang" });
langs.push({ name: "Golang", fileName: "go", extension: "mod", assetName: "golang" });
langs.push({ name: "C language", extension: "h", assetName: "h" });
langs.push({ name: "C++", extension: "hpp", assetName: "hpp" });
langs.push({ name: "INI", extension: "ini", assetName: "config" });
langs.push({ name: "HTML", extension: "html", assetName: "html" });
langs.push({ name: "JavaScript", extension: "js", assetName: "javascript" });
langs.push({ name: "JavaScript React", extension: "jsx", assetName: "javascriptx" });
langs.push({ name: "JSON", extension: "json", assetName: "json" });
langs.push({ name: "GNU Make", fileName: "makefile", extension: "", assetName: "makefile" });
langs.push({ name: "GNU Make", fileName: "Makefile", extension: "", assetName: "makefile" });
langs.push({ name: "Markdown", extension: "md", extensionAliases: ["MD"], assetName: "markdown" });
langs.push({ name: "PowerShell", extension: "ps1", assetName: "powershell" });
langs.push({ name: "Prettier", fileName: ".prettierrc", extension: "", assetName: "prettier" });
langs.push({ name: "Python", extension: "py", assetName: "python" });
langs.push({ name: "Ruby", extension: "rb", assetName: "ruby" });
langs.push({ name: "Rust", extension: "rs", assetName: "rust" });
langs.push({ name: "SASS", extension: "sass", assetName: "sass" });
langs.push({ name: "SCSS", extension: "scss", assetName: "scss" });
langs.push({ name: "Shell", extension: "sh", extensionAliases: ["bash", "zsh", "fish", "ksh"], assetName: "shell" });
langs.push({ name: "SQL", extension: "sql", assetName: "sql" });
langs.push({ name: "TOML", extension: "toml", assetName: "toml" });
langs.push({ name: "TypeScript", extension: "ts", assetName: "typescript" });
langs.push({ name: "TypeScript Declaration", extension: "d.ts", assetName: "typescript_d" });
langs.push({ name: "TypeScript React", extension: "tsx", assetName: "typescriptx" });
langs.push({ name: "Vim", extension: "vim", assetName: "vim" });
langs.push({ name: "Vue", extension: "vue", assetName: "vue" });
langs.push({ name: "YAML", extension: "yaml", extensionAliases: ["yml"], assetName: "yaml" });

export const languages = langs;
