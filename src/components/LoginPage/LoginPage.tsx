import { Dispatch, MouseEventHandler, useState } from "react";
import { AllActions, AppState } from "../../state";
import { setupSocket } from "../../state/websocket";

type LoginProps = {
	state: AppState;
	dispatch: Dispatch<AllActions>;
};

export function LoginPage({ state, dispatch }: LoginProps) {
	const [host, setHost] = useState("");
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const loginAction: MouseEventHandler<HTMLButtonElement> = async (e) => {
		if (!host) return alert("host is empty");
		if (!user) return alert("user is empty");
		if (!pass) return alert("pass is empty");

		try {
			const WSClient: WebSocket = await new Promise(function (resolve, reject) {
				var server = new WebSocket(`${host}?authentication=${user}:${pass}`, "echo-protocol");
				server.onopen = function () {
					resolve(server);
				};
				server.onerror = function (err) {
					reject(err);
				};
			});
			setupSocket(WSClient, dispatch);
			dispatch({ type: "socket-action", socket: WSClient });
		} catch (error) {
			alert("unable to connect");
		}
	};

	return (
		<div style={{ padding: "50px", textAlign: "center" }}>
			<div>
				Server Host: <input placeholder="ws://hostname" value={host} onChange={(e) => setHost(e.target.value)} />
			</div>
			<div>
				Username: <input value={user} onChange={(e) => setUser(e.target.value)} />
			</div>
			<div>
				Password: <input value={pass} onChange={(e) => setPass(e.target.value)} />
			</div>
			<button onClick={loginAction}>Log In</button>
		</div>
	);
}
