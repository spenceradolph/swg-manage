import { Dispatch } from "react";
import { AllActions } from "./actions";

export const setupSocket = (socket: WebSocket, dispatch: Dispatch<AllActions>) => {
	socket.onmessage = (ev: MessageEvent) => {
		console.log(ev);
	};
};
