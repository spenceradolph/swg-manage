import { Dispatch, MouseEventHandler } from "react";
import { AllActions, AppState } from "../../state";

type ControlProps = {
	state: AppState;
	dispatch: Dispatch<AllActions>;
};

export function ControlSection({ state, dispatch }: ControlProps) {
	const { socket } = state;

	if (!socket) return null;

	const startServer: MouseEventHandler<HTMLButtonElement> = (e) => {
		socket.send("start-server-message");
	};
	const stopServer: MouseEventHandler<HTMLButtonElement> = (e) => {};

	return (
		<div style={{ padding: "20px", margin: "20px" }}>
			<button style={{ marginRight: "40px" }} onClick={startServer}>
				Start Server
			</button>
			<button onClick={stopServer}>Stop Server</button>
		</div>
	);
}
