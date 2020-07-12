import { Client as RPCClient } from "discord-rpc";
import { workspace, commands, ExtensionContext } from "coc.nvim";
import { getPresence } from "../presence/presence";
import { LOG, LogLevel } from "../logger/logger";
import { VERSION } from "../version/version";

export class Client {
	private readonly _clientID: string;
	private _client?: RPCClient;
	private interval = setInterval(() => {}, 1);

	constructor(clientID: string) {
		this._clientID = clientID;
		this._client = new RPCClient({ transport: "ipc" });
		clearInterval(this.interval);
	}

	public connect = async (ctx?: ExtensionContext) => {
		if (!this._client) {
			this._client = new RPCClient({ transport: "ipc" });
		}
		this._client.connect(this._clientID);
		this._client.login({ clientId: this._clientID });
		this._client.on("ready", () => this.ready(ctx));
	};

	public disconnect = async () => {
		clearInterval(this.interval);
		await this._client!.destroy();
		this._client = undefined;
		LOG(LogLevel.Info, "disconnected from Discord gateway");
	};

	private ready = async (ctx?: ExtensionContext) => {
		LOG(LogLevel.Info, "connected to Discord gateway");
		if (ctx) {
			this.registerCommands(ctx);
		}
		this.trackActivity();
	};

	private registerCommands = async (ctx: ExtensionContext) => {
		ctx.subscriptions.push(
			commands.registerCommand("cord.disconnect", () => {
				LOG(LogLevel.Info, "trying to disconnect from Discord gateway");
				this.disconnect();
			})
		);
		ctx.subscriptions.push(
			commands.registerCommand("cord.reconnect", () => {
				LOG(LogLevel.Info, "trying to reconnect to Discord gateway");
				this.connect(ctx);
			})
		);
		ctx.subscriptions.push(
			commands.registerCommand("cord.version", () => {
				LOG(LogLevel.Info, `version ${VERSION}`);
			})
		);
	};

	private trackActivity = async () => {
		const startTimeStamp = new Date();
		this.interval = setInterval(() => {
			this._client!.setActivity(getPresence(startTimeStamp, workspace.root.split("/").pop(), workspace.getDocument(workspace.uri)?.uri.split("/").pop()));
		}, 1000);
	};
}
