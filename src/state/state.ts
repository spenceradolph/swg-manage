export type AppState = {
	isLoggedIn: boolean;
	socket: WebSocket | null;
};

export const InitialState: AppState = {
	isLoggedIn: false,
	socket: null,
};
