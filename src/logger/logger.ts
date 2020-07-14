import { workspace } from "coc.nvim";

export enum LogLevel {
	Info = 0,
	Warn,
	Err
}

export const LOG = (level: LogLevel, message: string) => {
	switch (level) {
		case LogLevel.Info: {
			workspace.showMessage(`coc-cord: ${message}`, "more");
		}
		case LogLevel.Warn: {
			workspace.showMessage(`coc-cord: ${message}`, "warning");
		}
		case LogLevel.Err: {
			workspace.showMessage(`coc-cord: ${message}`, "error");
		}
		default: {
			workspace.showMessage(`coc-cord: ${message}`, undefined);
		}
	}
};
