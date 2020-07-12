import { workspace } from "coc.nvim";

export enum LogLevel {
	Info = 0,
	Warn,
	Err
}

export const LOG = (level: LogLevel, message: string) => {
	let lvl: string | undefined;
	switch (level) {
		case LogLevel.Info: {
			lvl = "more";
		}
		case LogLevel.Warn: {
			lvl = "warning";
		}
		case LogLevel.Err: {
			lvl = "error";
		}
		default: {
			lvl = undefined;
		}
	}
	workspace.showMessage(`coc-cord: ${message}`, lvl);
};
