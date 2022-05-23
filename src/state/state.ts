import { client } from "websocket";

export type AppState = {
	isLoggedIn: boolean;
	wsclient: client | null;
};

export const InitialState: AppState = {
	isLoggedIn: false,
	wsclient: null,
};
