type LoginAction = {
	type: "login-action";
};

type LogoutAction = {
	type: "logout-action";
};

type SocketAction = {
	type: "socket-action";
	socket: WebSocket;
};

export type AllActions = LoginAction | LogoutAction | SocketAction;
