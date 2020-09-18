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
langs.push({
	name: "ESLint",
	fileName: ".eslintrc",
	extension: "json",
	extensionAliases: ["js", "yaml"],
	assetName: "eslint"
});
langs.push({ name: "Composer", fileName: "composer", extension: "json", assetName: "php" });
langs.push({ name: "TypeScript config", fileName: "tsconfig", extension: "json", assetName: "tsconfig" });
langs.push({ name: "Babel", fileName: "babel.config", extension: "json", assetName: "babel" });
langs.push({ name: "Babel", fileName: ".babelrc", extension: "json", assetName: "babel" });
langs.push({ name: "C language", extension: "c", assetName: "c" });
langs.push({ name: "CMake", fileName: "CMake", extension: "txt", assetName: "cmake" });
langs.push({ name: "Config", extension: "conf", assetName: "config" });
langs.push({ name: "C++", extension: "cpp", extensionAliases: ["cc", "cxx"], assetName: "cpp" });
langs.push({ name: "Crystal", extension: "cr", assetName: "crystal" });
langs.push({ name: "C#", extension: "cs", assetName: "csharp" });
langs.push({ name: "CSProj", extension: "csproj", assetName: "csproj" });
langs.push({ name: "CSS", extension: "css", assetName: "css" });
langs.push({ name: "Docker", fileName: "Dockerfile", extension: "", assetName: "docker" });
langs.push({ name: "Docker", fileName: "docker-compose", extension: "yml", assetName: "docker" });
langs.push({ name: "Docker", fileName: ".dockerignore", extension: "", assetName: "docker" });
langs.push({ name: "EditorConfig", fileName: ".editorconfig", extension: "", assetName: "editorconfig" });
langs.push({ name: "favicon", fileName: "favicon", extension: "ico", assetName: "favicon" });
langs.push({ name: "Git", fileName: ".gitignore", extension: "", assetName: "git" });
langs.push({ name: "Golang", fileName: "go", extension: "mod", assetName: "golang" });
langs.push({ name: "Golang", fileName: "go", extension: "sum", assetName: "golang" });
langs.push({ name: "Golang", extension: "go", assetName: "golang" });
langs.push({ name: "Golang", fileName: "go", extension: "mod", assetName: "golang" });
langs.push({ name: "GraphQL", extension: "graphql", assetName: "graphql" });
langs.push({ name: "C language", extension: "h", assetName: "h" });
langs.push({ name: "Haskell", extension: "hs", extensionAliases: ["lhs"], assetName: "haskell" });
langs.push({ name: "C++", extension: "hpp", extensionAliases: ["hh", "hxx"], assetName: "hpp" });
langs.push({ name: "INI", extension: "ini", assetName: "config" });
langs.push({ name: "HTML", extension: "html", assetName: "html" });
langs.push({ name: "Java", extension: "java", extensionAliases: ["jar"], assetName: "java" });
langs.push({ name: "JavaScript", extension: "js", assetName: "javascript" });
langs.push({ name: "JavaScript React", extension: "jsx", assetName: "javascriptx" });
langs.push({ name: "JSON", extension: "json", assetName: "json" });
langs.push({ name: "Kotlin", extension: "kt", extensionAliases: ["kts", "ktm"], assetName: "kotlin" });
langs.push({ name: "Lua", extension: "lua", assetName: "lua" });
langs.push({ name: "Julia", extension: "jl", assetName: "julia" });
langs.push({ name: "GNU Make", fileName: "makefile", extension: "", assetName: "makefile" });
langs.push({ name: "GNU Make", fileName: "Makefile", extension: "", assetName: "makefile" });
langs.push({ name: "Markdown", extension: "md", extensionAliases: ["MD"], assetName: "markdown" });
langs.push({ name: "Nim", extension: "nim", assetName: "nim" });
langs.push({ name: "Perl", extension: "pl", extensionAliases: ["plx", "pl", "pm", "xs", "t", "pod"], assetName: "perl" });
langs.push({ name: "PHP", extension: "php", assetName: "php" });
langs.push({ name: "PowerShell", extension: "ps1", assetName: "powershell" });
langs.push({ name: "Prettier", fileName: ".prettierrc", extension: "", assetName: "prettier" });
langs.push({ name: "Python", extension: "py", assetName: "python" });
langs.push({ name: "Razor page", extension: "cshtml", assetName: "razor" });
langs.push({ name: "Ruby", extension: "rb", assetName: "ruby" });
langs.push({ name: "Rust", extension: "rs", assetName: "rust" });
langs.push({ name: "SASS", extension: "sass", assetName: "sass" });
langs.push({ name: "SCSS", extension: "scss", assetName: "scss" });
langs.push({ name: "Shell", extension: "sh", extensionAliases: ["bash", "zsh", "fish", "ksh"], assetName: "shell" });
langs.push({ name: "VS Solution", extension: "sln", assetName: "sln" });
langs.push({ name: "SQL", extension: "sql", assetName: "sql" });
langs.push({ name: "SVG", extension: "svg", assetName: "svg" });
langs.push({ name: "Swift", extension: "swift", assetName: "swift" });
langs.push({ name: "TOML", extension: "toml", assetName: "toml" });
langs.push({ name: "TypeScript", extension: "ts", assetName: "typescript" });
langs.push({ name: "TypeScript Declaration", extension: "d.ts", assetName: "typescript_d" });
langs.push({ name: "TypeScript React", extension: "tsx", assetName: "typescriptx" });
langs.push({ name: "Vim", extension: "vim", assetName: "vim" });
langs.push({ name: "Vue", extension: "vue", assetName: "vue" });
langs.push({ name: "XML", extension: "xml", assetName: "xml" });
langs.push({ name: "YAML", extension: "yaml", extensionAliases: ["yml"], assetName: "yaml" });

export const languages = langs;
