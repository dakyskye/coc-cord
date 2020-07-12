import { Client } from "./client/client";
import { LOG, LogLevel } from "./logger/logger";
import { ExtensionContext } from "coc.nvim";

const clientID: string = "731545228539985940";

const client: Client = new Client(clientID);

export const activate = async (ctx: ExtensionContext) => {
	LOG(LogLevel.Info, "extension activated, trying to connect to Discord gateway");
	await client.connect(ctx);
};

export const deactivate = async () => {
	LOG(LogLevel.Info, "extension deactivated, trying to disconnect from Discord gateway");
	return await client.disconnect();
};

process.on("unhandledRejection", (err) => LOG(LogLevel.Err, err as string));
